import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { ACTIONS } from "../../redux/constants";
import styles from "./Menu.module.css";

export function Menu() {
  const dispatch = useDispatch();

  const resetFilter = () => {
    dispatch({ type: ACTIONS.RESET_FILTER });
  };
  return (
    <div className={styles.container}>
      <div className={styles.catalog}>
        <NavLink to="/all" className={styles.catalog__item} onClick={resetFilter}>
          <div>ALL</div>
          <div className={styles.catalog__arrow} onClick={resetFilter}></div>
        </NavLink>
        <NavLink to="/coat" className={styles.catalog__item} onClick={resetFilter}>
          <div> Coat</div>
          <div className={styles.catalog__arrow}></div>
        </NavLink>
        <NavLink to="/shirt" className={styles.catalog__item} onClick={resetFilter}>
          <div>Shirt</div>
          <div className={styles.catalog__arrow}></div>
        </NavLink>
        <NavLink to="/tshirt" className={styles.catalog__item} onClick={resetFilter}>
          <div>T-shirt</div>
          <div className={styles.catalog__arrow}></div>
        </NavLink>
        <NavLink to="/trousers" className={styles.catalog__item} onClick={resetFilter}>
          <div> Trousers</div>
          <div className={styles.catalog__arrow}></div>
        </NavLink>
        <NavLink to="/jeans" className={styles.catalog__item} onClick={resetFilter}>
          <div> Jeans</div>
          <div className={styles.catalog__arrow}></div>
        </NavLink>
      </div>
    </div>
  );
}
