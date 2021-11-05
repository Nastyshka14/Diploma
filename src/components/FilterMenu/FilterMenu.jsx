import React, { useEffect, useState } from "react";
import styles from "./FilterMenu.module.css";

export function FilterMenu({ items, onClickItem }) {
  const [activeItem, setActiveItem] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const onSelectItem = (index) => setActiveItem(index);
  const togglePopup = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={styles.filter}>
      <div className={styles.filter__label}>
        <span onClick={togglePopup} className={styles.filter__title}>
          Фильтры
        </span>
      </div>
      {isVisible && (
        <div className={styles.filter__popup}>
          <ul>
            <li
              className={activeItem === null ? styles.active : ""}
              onClick={() => onSelectItem(null)}
            >
              All
            </li>
            {items &&
              items.map((name, index) => (
                <li
                  className={activeItem === index ? styles.active : ""}
                  onClick={(e) => {
                    onSelectItem(index);
                    togglePopup(e);
                  }}
                  key={`${name}_${index}`}
                >
                  {name}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}
