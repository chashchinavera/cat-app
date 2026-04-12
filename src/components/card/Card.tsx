import { useCatsStore } from "@/store/useCatsStore";
import { memo } from "react";
import styles from "./Card.module.css";
import type { Cat } from "@/types/cat";
import Image from "next/image";

interface CardProps {
  cat: Cat;
}

const Card = memo(function Card({ cat }: CardProps) {
  const addToFavorites = useCatsStore((state) => state.addToFavorites);
  const removeFromFavorites = useCatsStore(
    (state) => state.removeFromFavorites,
  );

  const isFav = useCatsStore((state) => state.isFavorite(cat.id));

  function handleFavorites() {
    if (isFav) {
      removeFromFavorites(cat.id);
    } else {
      addToFavorites(cat.id);
    }
  }

  return (
    <div className={styles.card}>
      <Image
        className={styles.img}
        src={cat.url}
        alt="Кот"
        width={225}
        height={225}
        loading="lazy"
      />
      <div
        className={`${styles.button} ${isFav ? styles.button_active : ""}`}
        onClick={handleFavorites}
      ></div>
    </div>
  );
});

export default Card;
