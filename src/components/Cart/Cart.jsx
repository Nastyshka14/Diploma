import { useDispatch, useSelector } from "react-redux";
import { ACTIONS } from "../../redux/constants";
import { Card } from "../Card";
import styles from "./Cart.module.css";

export function Cart() {
  const cart = useSelector((state) => state.card.cart);
  const total = useSelector((state) => state.card.total);
  // const count = useSelector((state) => state.cart.count);
  const dispatch = useDispatch();
  const deleteCard = (id) => {
    dispatch({ type: ACTIONS.DELETE_CARD, id });
  };
  // const total = () => {
  //   dispatch({ type: ACTIONS.TOTAL });
  // };
  const onClickDelete = (id) => {
    deleteCard(id);
    // total();
  };
  const increment = (id) => {
    dispatch({ type: ACTIONS.INCREMENT, id });
  };
  const decrement = (id) => {
    dispatch({ type: ACTIONS.DECREMENT, id });
  };

  return (
    <div className={styles.main}>
      <div className={styles.items}>
        <h1 className={styles.title}>Корзина</h1>

        {cart.map((item) => (
          <div className={styles.card}>
            <div className={styles.card__info}>
              <img className={styles.card__image} src={item.image} alt="image" />
              <div className={styles.card__name}>
                <h3 className={styles.card__title}>{item.title}, </h3>
                <h3 className={styles.card__brand}>{item.brand}</h3>
              </div>
            </div>
            <div className={styles.card__counter}>
              <button className={styles.card__couter_minus} onClick={() => increment(item.id)}>
                -
              </button>
              <h3 className={styles.card__counter_count}>{item.count}</h3>
              <button className={styles.card__counter_plus} onClick={() => decrement(item.id)}>
                +
              </button>
            </div>
            <div className={styles.card__order}>
              <h3 className={styles.card__price}>{item.price}</h3>
              <button
                className={styles.card__order_delete_btn}
                onClick={() => onClickDelete(item.id)}
              >
                Удалить товар
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.total}>
        <h4 className={styles.total__title}>Товары</h4>
        <div className={styles.total__price}>
          <h4 className={styles.total__price_text}>Итого к оплате</h4>
          <h3 className={styles.total__price_price}>{total}</h3>
        </div>
        <button className={styles.total__button}>Оформить заказ</button>
      </div>
    </div>
  );
}
