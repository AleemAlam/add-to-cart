import React from "react";
import styles from "./CartListItem.module.css";

export default function CartListItem({ data, handleQty, handleRemove }) {
  return (
    <tr className={styles.container}>
      <td className={styles.item}>
        <img src={data.image} alt={data.title} />
        <p>{data.title}</p>
      </td>
      <td>
        <button onClick={() => handleQty(-1, data)} disabled={data.qty === 1}>
          -
        </button>
        <span className={styles.qty}>{data.qty}</span>
        <button onClick={() => handleQty(1, data)}>+</button>
      </td>
      <td>
        <h5>{data.qty * data.price}</h5>
      </td>
      <td className={styles.price}>
        <button onClick={() => handleRemove(data.id)}>X</button>
      </td>
    </tr>
  );
}
