import React, { useContext, useEffect, useState } from "react";
import CardList from "../components/card/CardList";
import Cart from "../components/cart/Cart";
import Loader from "../components/loader/Loader";
import Navbar from "../components/navbar/Navbar";
import { AppContext } from "../context/AppContextProvider";
import { getProduct } from "../network/networkRequest";

import styles from "./ProductsPage.module.css";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const { cart } = useContext(AppContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getProduct()
      .then((res) => res.json())
      .then((res) => {
        setProducts(res.products);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  return (
    <div className={styles.layout}>
      <Navbar itemsCount={cart.length} />
      {!loading ? (
        <div className={styles.contentContainer}>
          <CardList products={products} />
          <Cart />
        </div>
      ) : (
        <div className={styles.loaderContainer}>
          <Loader />
        </div>
      )}
    </div>
  );
}
