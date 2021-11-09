import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Menu.module.css";

export function Menu() {
  return (
    <div className={styles.container}>
      <div className={styles.catalog}>
        <NavLink to="/all" className={styles.catalog__item}>
          <div>ALL</div>
          <div className={styles.catalog__arrow}></div>
        </NavLink>
        <NavLink to="/coat" className={styles.catalog__item}>
          <div> Coat</div>
          <div className={styles.catalog__arrow}></div>
        </NavLink>
        <NavLink to="/shirt" className={styles.catalog__item}>
          <div>Shirt</div>
          <div className={styles.catalog__arrow}></div>
        </NavLink>
        <NavLink to="/tshirt" className={styles.catalog__item}>
          <div>T-shirt</div>
          <div className={styles.catalog__arrow}></div>
        </NavLink>
        <NavLink to="/trousers" className={styles.catalog__item}>
          <div> Trousers</div>
          <div className={styles.catalog__arrow}></div>
        </NavLink>
        <NavLink to="/jeans" className={styles.catalog__item}>
          <div> Jeans</div>
          <div className={styles.catalog__arrow}></div>
        </NavLink>
      </div>
    </div>
  );
}
