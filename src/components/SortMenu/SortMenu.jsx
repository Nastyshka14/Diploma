import React, { useState } from "react";
import styles from "./SortMenu.module.css";

export function SortMenu({ items, onClick }) {
  const [activeItem, setActiveItem] = useState(null);
  const onSelectItem = (index) => setActiveItem(index);
  return (
    <div className={styles.wrap}>
      <div className={styles.main}>
        <span className={styles.title}>Сортировка по:</span>
        <button
          className={activeItem === null ? styles.active : ""}
          onClick={() => onSelectItem(null)}
        >
          популярности
        </button>
        {items &&
          items.map((name, index) => (
            <button
              className={activeItem === index ? styles.active : ""}
              onClick={() => onSelectItem(index)}
              key={`${name}_${index}`}
            >
              {name}
            </button>
          ))}
      </div>
    </div>
  );
}
