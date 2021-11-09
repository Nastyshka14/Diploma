import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ACTIONS } from "../../redux/constants";
import { Card } from "../Card";
import { FilterMenu } from "../FilterMenu";
import { Menu } from "../Menu";
import { SortMenu } from "../SortMenu";
import categories from "../../data/categories.json";

import styles from "./All.module.css";

export function All() {
  const filteredCards = useSelector((state) => state.card.filteredCards);

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

  // const filterCards = (event) => {
  //   const selectCoat = cards.filter((card) => card.type === "coat");
  //   const selectShirt = cards.filter((card) => card.type === "shirt");
  //   const selectTshirt = cards.filter((card) => card.type === "t-shirt");
  //   const selectTrousers = cards.filter((card) => card.type === "trousers");
  //   if (event.target.id === "all") {
  //     setFilteredCards(cards);
  //   } else if (event.target.id === "coat") {
  //     setFilteredCards(selectCoat);
  //   } else if (event.target.id === "shirt") {
  //     setFilteredCards(selectShirt);
  //   } else if (event.target.id === "t-shirt") {
  //     setFilteredCards(selectTshirt);
  //   } else if (event.target.id === "trousers") {
  //     setFilteredCards(selectTrousers);
  //   }
  // };

  return (
    <div className={styles.home__container}>
      <Menu />
      <SortMenu sortReset={sortReset} sortHighToLow={sortHighToLow} sortLowToHigh={sortLowToHigh} />
      <FilterMenu
      // items={filters}
      />
      <div className={styles.wrap}>
        <div className={styles.main}>
          {filteredCards.map((item) => {
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
