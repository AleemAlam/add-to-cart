import React from "react";

import styles from "./Navbar.module.css";

export default function Navbar({ itemsCount }) {
  return (
    <div className={styles.navbar}>
      <h2 className={styles.logo}>All Items</h2>
      <div className={styles.cartNotification}>
        {itemsCount}
        {itemsCount > 1 ? ` items` : ` item`} in cart
      </div>
    </div>
  );
}
