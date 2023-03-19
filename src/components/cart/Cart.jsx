import React, { useContext } from "react";
import CartListItem from "./CartListItem";
import styles from "./Cart.module.css";
import { AppContext } from "../../context/AppContextProvider";

const CardList = ({ label, price }) => (
  <div className={styles.cartTotalCardRow}>
    <p>{label}</p>
    <p>${price}</p>
  </div>
);

export default function Cart() {
  const { cart, handleCart, handleRemove, overall } = useContext(AppContext);

  const handleQty = (val, data) => {
    if (val === -1 && data.qty === 0) {
      return;
    }
    handleCart({ ...data, qty: data.qty + val });
  };

  return (
    <div>
      {!!cart.length && (
        <table className={styles.cartListContainer}>
          <thead>
            <tr className={styles.cartListHead}>
              <th>Items</th>
              <th>Qty</th>
              <th>Price</th>
              <th>X</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <CartListItem
                key={item.id}
                data={item}
                handleQty={handleQty}
                handleRemove={handleRemove}
              />
            ))}
          </tbody>
        </table>
      )}
      <div className={styles.cartTotalCard}>
        {cart.length ? (
          <>
            <CardList
              label={`Items (${cart.length})`}
              price={overall.overallPrice.toFixed(2)}
            />
            <CardList
              label="Discount"
              price={overall.overallDiscount.toFixed(2)}
            />
            <CardList label="Type Discount" price="0" />
            <CardList
              label="Total"
              price={(overall.overallPrice - overall.overallDiscount).toFixed(
                2
              )}
            />
          </>
        ) : (
          <div className={styles.emptyState}>
            <h3>Cart</h3>
            <p>Please add some items to the cart</p>
          </div>
        )}
      </div>
    </div>
  );
}
