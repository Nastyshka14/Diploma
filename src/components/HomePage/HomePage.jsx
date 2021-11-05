import styles from "./HomePage.module.css";
import React, { useState } from "react";
import { Menu } from "../Menu";
import { CardMenu } from "../CardMenu";
import data from "../../data/data.json";
import categories from "../../data/categories.json";
import filters from "../../data/filter.json";
import sorts from "../../data/sort.json";
import { SortMenu } from "../SortMenu";
import { FilterMenu } from "../FilterMenu";
import { Card } from "../Card";

export function HomePage() {
  const [cards, setCards] = useState(data);
  const [filteredCards, setFilteredCards] = useState(cards);

  const filterCards = (event) => {
    const selectCoat = cards.filter((card) => card.type === "coat");
    const selectShirt = cards.filter((card) => card.type === "shirt");
    const selectTshirt = cards.filter((card) => card.type === "t-shirt");
    const selectTrousers = cards.filter((card) => card.type === "trousers");
    if (event.target.id === "all") {
      setFilteredCards(cards);
    } else if (event.target.id === "coat") {
      setFilteredCards(selectCoat);
    } else if (event.target.id === "shirt") {
      setFilteredCards(selectShirt);
    } else if (event.target.id === "t-shirt") {
      setFilteredCards(selectTshirt);
    } else if (event.target.id === "trousers") {
      setFilteredCards(selectTrousers);
    }
  };

  return (
    <div className={styles.home__container}>
      <Menu
        items={categories}
        filterCards={filterCards}
        onSelectItem={(item) => console.log(item)}
      />
      <SortMenu items={sorts} onClickItem={(name) => console.log(name)} />
      <FilterMenu items={filters} onClickItem={(name) => console.log(name)} />
      <div className={styles.wrap}>
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
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
