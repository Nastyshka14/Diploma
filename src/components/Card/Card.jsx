import styles from "./Card.module.css";
import React from "react";

export function Card({ id, title, description, image, price, type, brand, select }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.card__brand}>{brand}</h3>
      <h3 className={styles.card__title}>{title}</h3>
      <img className={styles.card__image} src={image} alt="image" />
      <p className={styles.card__description}>{description}</p>
      <div className={styles.card__info}>
        <h3 className={styles.card__price}>{price}</h3>
        <button className={styles.card__add_btn}>Add to bag</button>
        <button className={styles.card__like_btn}></button>
      </div>
    </div>
  );
}
