import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ACTIONS } from "../../redux/constants";
import { Card } from "../Card";
import { FilterMenu } from "../FilterMenu";
import { Menu } from "../Menu";
import { SortMenu } from "../SortMenu";
import categories from "../../data/categories.json";
import styles from "./Tshirt.module.css";

export function Tshirt() {
  const cards = useSelector((state) => state.card.cards).filter((item) => item.type === "tshirt");

  const dispatch = useDispatch();

  const addToCart = (newCard) => {
    dispatch({ type: ACTIONS.ADD_CARD, newCard });
  };

  // const show = useSelector((state) => state.card.show);

  // const showFilters = () => {
  //   dispatch({ type: ACTIONS.SHOW_FILTERS });
  // };

  const sortReset = () => {
    dispatch({ type: ACTIONS.SORT_RESET });
  };

  const sortLowToHigh = () => {
    dispatch({ type: ACTIONS.SORT_LOW_TO_HIGHT });
  };

  const sortHighToLow = () => {
    dispatch({ type: ACTIONS.SORT_HIGHT_TO_LOW });
  };

  return (
    <div className={styles.home__container}>
      <Menu

      // filterCards={filterCards}
      />
      <SortMenu sortReset={sortReset} sortHighToLow={sortHighToLow} sortLowToHigh={sortLowToHigh} />
      <FilterMenu
      // items={filters}
      />
      <div className={styles.wrap}>
        <div className={styles.main}>
          {cards.map((item) => {
            return (
              <Card
                key={item.id}
                {...item}
                brand={item.brand}
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                select={item.select}
                addToCart={addToCart}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
