import styles from "./HomePage.module.css";
import React, { useEffect, useState } from "react";
import { Menu } from "../Menu";
import data from "../../data/data.json";
import categories from "../../data/categories.json";
import filters from "../../data/filter.json";

import { SortMenu } from "../SortMenu";
import { FilterMenu } from "../FilterMenu";
import { Card } from "../Card";
import { useDispatch, useSelector } from "react-redux";
import { ACTIONS } from "../../redux/constants";
import { useHistory } from "react-router";

export function HomePage() {
  const filteredCards = useSelector((state) => state.card.filteredCards);

  const dispatch = useDispatch();

  const addToCart = (newCard) => {
    dispatch({ type: ACTIONS.ADD_CARD, newCard });
  };

  const addToFavorites = (newCard) => {
    dispatch({ type: ACTIONS.ADD_TO_FAVORITES, newCard });
  };

  const showCard = (id) => {
    dispatch({ type: ACTIONS.SHOW_ABOUT, id });
  };
  const sortUpdateUp = () => {
    dispatch({ type: ACTIONS.SORT_UPDATE_UP });
  };

  const sortUpdateDown = () => {
    dispatch({ type: ACTIONS.SORT_UPDATE_DOWN });
  };

  const sortLowToHight = () => {
    dispatch({ type: ACTIONS.SORT_LOW_TO_HIGHT });
  };

  const sortHightToLow = () => {
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
    <div className={styles.wrap}>
      <Menu />
      <div className={styles.container}>
        <div className={styles.filters}>
          <SortMenu
            sortUpdateUp={sortUpdateUp}
            sortUpdateDown={sortUpdateDown}
            sortHightToLow={sortHightToLow}
            sortLowToHight={sortLowToHight}
          />
          <FilterMenu items={filters} />
        </div>
        <div className={styles.items}>
          <div className={styles.main}>
            {filteredCards.map((item) => {
              return (
                <Card
                  key={item.id}
                  brand={item.brand}
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  select={item.select}
                  addToCart={addToCart}
                  addToFavorites={addToFavorites}
                  showCard={showCard}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
