import { useCatsStore } from "@/store/useCatsStore";
import styles from "./Card.module.css";
import type { Cat } from "@/types/cat";
import Image from "next/image";

interface CardProps {
  cat: Cat;
}

const Card = ({ cat }: CardProps) => {
  const { isFavorite, addToFavorites, removeFromFavorites } = useCatsStore();

  function handleFavorites() {
    const currentId = cat.id;
    if (isFavorite(currentId)) {
      removeFromFavorites(currentId);
    } else {
      addToFavorites(currentId);
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
        loading="eager"
      />
      <div
        className={`${styles.button} ${isFavorite(cat.id) ? styles.button_active : ""}`}
        onClick={handleFavorites}
      ></div>
    </div>
  );
};

export default Card;
