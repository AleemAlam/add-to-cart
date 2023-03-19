import React, { useContext } from "react";
import { AppContext } from "../../context/AppContextProvider";
import styles from "./Card.module.css";
export default function Card({ id, image, title, price, discountPercentage }) {
  const discountedPrice = (price * discountPercentage) / 100;
  const { handleCart } = useContext(AppContext);

  const handleClick = () => {
    const payload = {
      id,
      image,
      title,
      price,
      discountedPrice,
    };
    handleCart(payload);
  };

  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <img src={image} alt={title} width="100%" height="100%" />
      </div>
      {discountPercentage && (
        <span className={styles.discount}>
          {Math.round(discountPercentage)}% Off
        </span>
      )}
      <div className={styles.cardContent}>
        <h6>{title}</h6>
        <div className={styles.cardPrice}>
          <div className={styles.price}>
            <h4>${price}</h4>
            <h4>${(price - discountedPrice).toFixed(2)}</h4>
          </div>
          <button onClick={handleClick}>Add to cart</button>
        </div>
      </div>
    </div>
  );
}
