import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import styles from "./CardItem.module.css";

export function CardItem() {
  const history = useHistory();

  const { id } = useParams();
  const cards = useSelector((state) => state.card.filteredCards);

  const item = cards.find((card) => String(card.id) === id);

  return item ? (
    <div className={styles.main}>
      <div className={styles.card__name}>
        <button className={styles.card__back_btn} onClick={() => history.goBack()}>
          <div className={styles.card__back_arrow}></div>
          <p className={styles.card__back_text}>Назад</p>
        </button>
        <h3 className={styles.card__brand}> {item.brand} </h3>
        <div className={styles.card__symbol}> / </div>
        <h3 className={styles.card__title}> {item.title} </h3>
      </div>
      <div className={styles.card__content}>
        <img className={styles.card__image} src={`../.${item.image}`} alt="image" />
        <div className={styles.card__info}>
          <h3 className={styles.card__price}>{item.price}</h3>
          <div className={styles.card__order}>
            <button className={styles.card__button}>X</button>
            <button className={styles.card__button}>S</button>
            <button className={styles.card__button}>M</button>
            <button className={styles.card__button}>L</button>
            <button className={styles.card__button}>XL</button>
          </div>
          <p className={styles.card__description}>{item.description}</p>
        </div>
      </div>
    </div>
  ) : null;
}
