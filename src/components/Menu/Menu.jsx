import { useState } from "react";
import styles from "./Menu.module.css";

export function Menu({ items, filterCards }) {
  const [activeItem, setActiveItem] = useState(false);
  const onSelectItem = (index) => {
    setActiveItem(!activeItem);
    filterCards(index);
  };

  return (
    <div className={styles.menu__container}>
      <div className={styles.catalog}>
        <button
          className={activeItem === false ? styles.active : ""}
          onClick={onSelectItem}
          id={"all"}
        >
          All
        </button>
        {items &&
          items.map((name, index) => (
            <button
              className={activeItem ? styles.active : ""}
              onClick={onSelectItem}
              key={`${name}_${index}`}
              id={name}
            >
              {name}
            </button>
          ))}
      </div>
    </div>
  );
}
