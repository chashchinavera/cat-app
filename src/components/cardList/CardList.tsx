import Card from "../card/Card";
import styles from "./CardList.module.css";
import type { Cat } from "@/types/cat";

interface CardListProps {
  cats: Cat[];
}

const CardList = ({ cats }: CardListProps) => {
  return (
    <div className={styles.grid}>
      {cats.map((cat) => (
        <Card key={cat.id} cat={cat} />
      ))}
    </div>
  );
};

export default CardList;
