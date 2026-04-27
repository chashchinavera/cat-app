"use client";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Cat } from "@/types/cat";
import { fetchCats } from "@/services/catService";

interface CatsState {
  cats: Cat[];
  favorites: Cat[];
  catsPage: number;
  isCatsLoading: boolean;
  hasMoreCats: boolean;
  isError: boolean;
  addToFavorites: (catId: string) => void;
  removeFromFavorites: (catId: string) => void;
  isFavorite: (catId: string) => boolean;
  loadMoreCats: () => void;
}

export const useCatsStore = create<CatsState>()(
  persist(
    (set, get) => ({
      cats: [],
      favorites: [],
      catsPage: 0,
      isCatsLoading: false,
      hasMoreCats: true,
      isError: false,

      addToFavorites: (catId) =>
        set((state) => ({
          favorites: [
            ...state.favorites,
            ...state.cats.filter((cat) => cat.id === catId),
          ],
        })),

      removeFromFavorites: (catId) =>
        set((state) => ({
          favorites: state.favorites.filter((cat) => cat.id !== catId),
        })),

      isFavorite: (catId) => get().favorites.some((cat) => cat.id === catId),
      loadMoreCats: async () => {
        const state = get();
        if (state.isCatsLoading || !state.hasMoreCats) return;

        set({
          isCatsLoading: true,
          isError: false,
        });
        try {
          const newCats = await fetchCats(state.catsPage, 10);

          set({
            cats: [...state.cats, ...newCats],
            catsPage: state.catsPage + 1,
            isCatsLoading: false,
            hasMoreCats: newCats.length !== 0,
          });
        } catch (error) {
          console.error("Ошибка при загрузке котов:", error);

          set({
            isError: true,
            isCatsLoading: false,
          });
        }
      },
    }),
    {
      name: "cat-favorites-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
