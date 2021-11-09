import { useDispatch, useSelector } from "react-redux";
import { ACTIONS } from "../../redux/constants";
import styles from "./Cart.module.css";

export function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const deleteCard = (id) => {
    dispatch({ type: ACTIONS.DELETE_CARD, id });
  };

  return (
    <div className={styles.main}>
      {cart.map((item) => (
        <div className={styles.card}>
          <img className={styles.card__image} src={item.image} alt="image" />
          <div className={styles.card__name}>
            <h3 className={styles.card__title}>{item.title}, </h3>
            <h3 className={styles.card__brand}>{item.brand}</h3>
          </div>
          <div className={styles.card__order}>
            <h3 className={styles.card__price}>{item.price}</h3>
            <button className={styles.card__order_btn}>Cделать заказ</button>
            <button className={styles.card__order_delete_btn} onClick={(id) => deleteCard(item.id)}>
              Удалить товар
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
