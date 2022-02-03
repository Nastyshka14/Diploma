import styles from "./Card.module.css";
import React from "react";
import { NavLink } from "react-router-dom";
import { useHistory, useParams } from "react-router";

export function Card({
  id,
  title,
  description,
  image,
  price,
  type,
  brand,
  count,
  addToCart,
  addToFavorites,
  total,
}) {
  const history = useHistory();

  // const onClickAddToCart = (id) => {
  //   // const newCard = {
  //   //   title: title,
  //   //   image: image,
  //   //   price: price,
  //   //   brand: brand,
  //   //   count: count,
  //   //   id: id,
  //   // };

  //   addToCart(id);
  //   total();
  // };
  const onClickAddToFavorites = () => {
    const newCard = { title: title, image: image, price: price, brand: brand };
    addToFavorites(newCard);
  };

  const onClickToShowCard = () => {
    history.push(`/card/${id}`);
  };

  return (
    <div className={styles.card}>
      <div></div>
      <img className={styles.card__image} src={image} alt="image" onClick={onClickToShowCard} />
      <div className={styles.card__text}>
        <h3 className={styles.card__brand} onClick={onClickToShowCard}>
          {brand}
        </h3>
        <h3 className={styles.card__title} onClick={onClickToShowCard}>
          {title}
        </h3>
        <p className={styles.card__description}>{description}</p>

        <div className={styles.card__buttons}>
          <h3 className={styles.card__price}>{price}</h3>
          <button className={styles.card__add_btn} onClick={() => addToCart(id)}></button>
          <button className={styles.card__like_btn} onClick={onClickAddToFavorites}></button>
        </div>
      </div>
    </div>
  );
}
