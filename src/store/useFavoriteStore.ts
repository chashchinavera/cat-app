import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Cat } from "@/types/cat";

interface FavoriteState {
  favorites: Cat[];
  addToFavorites: (cat: Cat) => void;
  removeFromFavorites: (catId: string) => void;
  isFavorite: (catId: string) => boolean;
}

export const useFavoriteStore = create<FavoriteState>()(
  persist(
    (set, get) => ({
      favorites: [],

      addToFavorites: (cat) =>
        set((state) => ({
          favorites: [...state.favorites, cat],
        })),

      removeFromFavorites: (catId) =>
        set((state) => ({
          favorites: state.favorites.filter((cat) => cat.id !== catId),
        })),

      isFavorite: (catId) => get().favorites.some((cat) => cat.id === catId),
    }),
    {
      name: "cat-favorites-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
