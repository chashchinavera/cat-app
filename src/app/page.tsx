"use client";

import CardList from "@/components/cardList/CardList";
import { useCatsStore } from "@/store/useCatsStore";
import { useEffect } from "react";

export default function Home() {
  const { cats, loadMoreCats } = useCatsStore();

  useEffect(() => {
    if (cats.length === 0) {
      loadMoreCats(1, 10);
    }
  }, [cats.length, loadMoreCats]);

  return (
    <>
      <CardList cats={cats} />
    </>
  );
}
