import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./FilterMenu.module.css";

export function FilterMenu({ showFilters, showBrands, filter }) {
  const showFiltersList = useSelector((state) => state.card.showFilters);
  const showBrandsList = useSelector((state) => state.card.showBrands);
  const onClickItem = (event) => {
    showFilters(event.target.id);
    showBrands(event.target.id);
    filter(event.target.id);
  };

  return (
    <div className={styles.filter}>
      <div className={styles.filter__label}>
        <span className={styles.filter__title} onClick={() => showFilters()}>
          Фильтры
        </span>
        <div className={styles.filter__icon}></div>
      </div>
      {showFiltersList && (
        <div>
          <div className={styles.filter__popup}>
            <ul>
              <li className={styles.popup__item} id="All" onClick={() => showBrands()}>
                Brand
                <div className={styles.filter__popup_checkbox}></div>
              </li>
            </ul>
          </div>
        </div>
      )}
      {showBrandsList && (
        <div>
          <div className={styles.brand__popup}>
            <ul>
              <li className={styles.popup__item} id="All" onClick={(e) => onClickItem(e)}>
                <div className={styles.brand__popup_checkbox}></div>All
              </li>
              <li className={styles.popup__item} id="Bershka" onClick={(e) => onClickItem(e)}>
                <div className={styles.brand__popup_checkbox}></div>Bershka
              </li>
              <li className={styles.popup__item} id="Stradivarius" onClick={(e) => onClickItem(e)}>
                <div className={styles.brand__popup_checkbox}></div>Stradivarius
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
