"use client";

import CardList from "@/components/cardList/CardList";
import { useCatsStore } from "@/store/useCatsStore";

export default function Favorites() {
  const { favorites } = useCatsStore();

  return (
    <>
      <CardList cats={favorites} />
    </>
  );
}
