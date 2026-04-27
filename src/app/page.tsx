"use client";

import CardList from "@/components/cardList/CardList";
import { useCatsStore } from "@/store/useCatsStore";
import { useEffect } from "react";

export default function Home() {
  const { cats, loadMoreCats, isCatsLoading, hasMoreCats, isError } =
    useCatsStore();

  useEffect(() => {
    if (cats.length === 0) {
      loadMoreCats();
    }
  }, [cats.length, loadMoreCats]);

  return (
    <>
      <CardList
        cats={cats}
        loadMoreCats={loadMoreCats}
        isCatsLoading={isCatsLoading}
        hasMoreCats={hasMoreCats}
        isError={isError}
      />
    </>
  );
}
