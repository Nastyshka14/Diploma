import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ACTIONS } from "../../redux/constants";
import { Card } from "../Card";
import { FilterMenu } from "../FilterMenu";
import { Menu } from "../Menu";
import { SortMenu } from "../SortMenu";
import categories from "../../data/categories.json";
import styles from "./Trousers.module.css";

export function Trousers() {
  const filteredCards = useSelector((state) => state.card.filteredCards).filter(
    (item) => item.type === "trousers"
  );

  const dispatch = useDispatch();

  const addToCart = (newCard) => {
    dispatch({ type: ACTIONS.ADD_CARD, newCard });
  };

  const addToFavorites = (newCard) => {
    dispatch({ type: ACTIONS.ADD_TO_FAVORITES, newCard });
  };

  const sortUpdateUp = () => {
    dispatch({ type: ACTIONS.SORT_UPDATE_UP });
  };
  const showCard = (id) => {
    dispatch({ type: ACTIONS.SHOW_ABOUT, id });
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

  const filter = (id) => {
    dispatch({ type: ACTIONS.FILTER, id });
  };

  const showFilters = () => {
    dispatch({ type: ACTIONS.SHOW_FILTERS });
  };

  const showBrands = () => {
    dispatch({ type: ACTIONS.SHOW_BRANDS });
  };

  return (
    <div className={styles.wrap}>
      <Menu
        items={categories}
        // filterCards={filterCards}
      />
      <div className={styles.container}>
        <div className={styles.filters}>
          <SortMenu
            sortUpdateUp={sortUpdateUp}
            sortUpdateDown={sortUpdateDown}
            sortHightToLow={sortHightToLow}
            sortLowToHight={sortLowToHight}
          />
          <FilterMenu filter={filter} showFilters={showFilters} showBrands={showBrands} />
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
