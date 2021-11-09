import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Menu.module.css";

export function Menu() {
  return (
    <div className={styles.menu__container}>
      <div className={styles.catalog}>
        <NavLink to="/all" className={styles.catalog__item}>
          <div>ALL</div>
        </NavLink>
        <NavLink to="/coat" className={styles.catalog__item}>
          Coat
        </NavLink>
        <NavLink to="/shirt" className={styles.catalog__item}>
          Shirt
        </NavLink>
        <NavLink to="/tshirt" className={styles.catalog__item}>
          T-shirt
        </NavLink>
        <NavLink to="/trousers" className={styles.catalog__item}>
          Trousers
        </NavLink>
        <NavLink to="/jeans" className={styles.catalog__item}>
          Jeans
        </NavLink>
      </div>
    </div>
  );
}
