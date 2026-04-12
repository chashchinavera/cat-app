"use client";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Cat } from "@/types/cat";
import { fetchCats } from "@/services/catService";

interface CatsState {
  cats: Cat[];
  favorites: Cat[];
  addToFavorites: (catId: string) => void;
  removeFromFavorites: (catId: string) => void;
  isFavorite: (catId: string) => boolean;
  loadMoreCats: (page: number, limit: number) => void;
}

export const useCatsStore = create<CatsState>()(
  persist(
    (set, get) => ({
      cats: [],
      favorites: [],

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
      loadMoreCats: async (page, limit) => {
        const newCats = await fetchCats(page, limit);

        set({
          cats: newCats,
        });
      },
    }),
    {
      name: "cat-favorites-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
