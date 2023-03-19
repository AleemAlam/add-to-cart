import React from "react";
import Card from "./Card";
import styles from "./CardList.module.css";

export default function CardList({ products }) {
  return (
    <div className={styles.cardList}>
      {products.map((prod) => (
        <Card
          key={prod.id}
          id={prod.id}
          title={prod.title}
          price={prod.price}
          discountPercentage={prod.discountPercentage}
          image={prod.images?.[0]}
        />
      ))}
    </div>
  );
}
