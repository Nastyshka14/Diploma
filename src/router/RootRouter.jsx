import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import styles from "./Header.module.css";
import { User } from "../components/User";
import { Menu } from "../components/Menu";
import { HomePage } from "../components/HomePage";
import { SliderContainer } from "../components/Slider";
import { useState } from "react";
import { SearchInput } from "../components/SearchInput";
import data from "../data/data.json";
import React from "react";
import { Form } from "../components/Form";
import { SearchPage } from "../components/SearchPage";
export function RootRouter() {
  return (
    <BrowserRouter>
      <div className={styles.header}>
        <div className={styles.header__content}>
          <Link to="/homepage">
            <div className={styles.header__menu}>
              <button type="button" className={styles.header__menu_btn}>
                Меню
              </button>
            </div>
          </Link>
          <Link to="/">
            <div className={styles.header__logo}>
              <img
                src="https://static-sl.insales.ru/files/1/2933/14871413/original/Group_8.svg"
                alt="Мой интернет-магазин"
                title="Мой интернет-магазин"
              />
            </div>
          </Link>

          <div className={`${styles.header__controls} ${styles.header__show}`}>
            <Link to="/search">
              <div className={styles.header__search}>
                <button
                  type="button"
                  className={`${styles.header__search_btn} ${styles.header__control}`}
                ></button>
              </div>
            </Link>
            <Link to="/user">
              <div className={styles.header__user}>
                <button
                  type="button"
                  className={`${styles.header__user_btn} ${styles.header__control}`}
                ></button>
              </div>
            </Link>
            <Link to="/compare">
              <div className={styles.header__compare}>
                <button
                  type="button"
                  className={`${styles.header__compare_btn} ${styles.header__control}`}
                ></button>
              </div>
            </Link>
            <Link to="/favorite">
              <div className={styles.header__favorite}>
                <button
                  type="button"
                  className={`${styles.header__favorite_btn} ${styles.header__control}`}
                ></button>
              </div>
            </Link>
            <Link to="/basket">
              <div className={styles.header__basket}>
                <button
                  type="button"
                  className={`${styles.header__basket_btn} ${styles.header__control}`}
                ></button>
              </div>
            </Link>
          </div>
        </div>

        <Switch>
          <Route exact path="/">
            <SliderContainer />
          </Route>
          <Route exact path="/search">
            <SearchPage />
          </Route>
          <Route exact path="/user">
            <User />
          </Route>
          <Route exact path="/homepage">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
