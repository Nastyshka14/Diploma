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
  addToCart,
  addToFavorites,
  showCard,
}) {
  const history = useHistory();

  const onClickAddToCart = () => {
    const newCard = { title: title, image: image, price: price, brand: brand };
    addToCart(newCard);
  };
  const onClickAddToFavorites = () => {
    const newCard = { title: title, image: image, price: price, brand: brand };
    addToFavorites(newCard);
  };
  const onClickToShowCard = (id) => {
    history.push(`/card/${id}`);
    console.log(id);
    showCard(id);
  };

  // const clickToShowCard = () => {
  //   history.push(`/card/${id}`);
  // };

  return (
    <div className={styles.card}>
      <img className={styles.card__image} src={image} alt="image" onClick={onClickToShowCard} />
      <h3 className={styles.card__brand} onClick={onClickToShowCard}>
        {brand}
      </h3>
      <h3 className={styles.card__title} onClick={onClickToShowCard}>
        {title}
      </h3>
      <p className={styles.card__description}>{description}</p>
      <h3 className={styles.card__price}>{price}</h3>
      <div className={styles.card__buttons}>
        <button className={styles.card__add_btn} onClick={onClickAddToCart}>
          Add to bag
        </button>
        <button className={styles.card__like_btn} onClick={onClickAddToFavorites}></button>
      </div>
    </div>
  );
}
