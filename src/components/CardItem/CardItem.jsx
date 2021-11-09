import { useSelector } from "react-redux";
import styles from "./CardItem.module.css";

export function CardItem() {
  const filteredCards = useSelector((state) => state.card.filteredCards);

  return console.log(filteredCards);
  // <div className={styles.main}>
  //   {filteredCards.filter((item) => (
  //     <div className={styles.card}>
  //       <img className={styles.card__image} src={`../.${item.image}`} alt="image" />
  //       <div className={styles.card__name}>
  //         <h3 className={styles.card__title}>{item.title}, </h3>
  //         <h3 className={styles.card__brand}>{item.brand}</h3>
  //       </div>
  //       <p className={styles.card__description}>{item.description}</p>
  //       <div className={styles.card__order}>
  //         <h3 className={styles.card__price}>{item.price}</h3>
  //         <button className={styles.card__order_btn}>Cделать заказ</button>
  //         <button className={styles.card__order_delete_btn}>Удалить товар</button>
  //       </div>
  //     </div>
  //   ))}
  // </div>
}
