import { useSelector } from "react-redux";
import styles from "./Favorites.module.css";

export function Favorites() {
  const favorites = useSelector((state) => state.favorites.favorites);

  return (
    <div className={styles.main}>
      {favorites.map((item) => (
        <div className={styles.card}>
          <img className={styles.card__image} src={item.image} alt="image" />
          <div className={styles.card__name}>
            <h3 className={styles.card__title}>{item.title}, </h3>
            <h3 className={styles.card__brand}>{item.brand}</h3>
          </div>
          <div className={styles.card__order}>
            <h3 className={styles.card__price}>{item.price}</h3>
            {/* <button className={styles.card__order_delete_btn}>Удалить товар</button> */}
          </div>
        </div>
      ))}
    </div>
  );
}
