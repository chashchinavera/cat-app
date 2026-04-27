import Card from "../card/Card";
import styles from "./CardList.module.css";
import type { Cat } from "@/types/cat";
import { useRef, useEffect } from "react";

interface CardListProps {
  cats: Cat[];
  isCatsLoading?: boolean;
  hasMoreCats?: boolean;
  isError?: boolean;
  loadMoreCats?: () => void;
}

const CardList = ({
  cats,
  isCatsLoading,
  hasMoreCats,
  isError,
  loadMoreCats,
}: CardListProps) => {
  const observerTarget = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (
          entries[0].isIntersecting &&
          !isCatsLoading &&
          !isError &&
          hasMoreCats &&
          loadMoreCats
        ) {
          loadMoreCats();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "200px",
      },
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [loadMoreCats, isCatsLoading, hasMoreCats, isError]);

  return (
    <>
      <div className={styles.grid}>
        {cats.map((cat) => (
          <Card key={cat.id} cat={cat} />
        ))}
      </div>
      <div ref={observerTarget} className={styles.load_tracker}>
        {isCatsLoading && (
          <p className={styles.info_text}>... загружаем еще котиков ...</p>
        )}
        {isError && (
          <div className={styles.error_container}>
            <p className={styles.info_text}>Не удалось загрузить котиков</p>
            <button className={styles.reload_button} onClick={loadMoreCats}>
              Обновить страницу
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CardList;
