import React, { useState } from "react";

import categories from "../../data/categories.json";
import filters from "../../data/filter.json";

import data from "../../data/data.json";
import styles from "./SearchPage.module.css";
import { HomePage } from "../HomePage";
import { SearchInput } from "../SearchInput";
import { Menu } from "../Menu";
import { SortMenu } from "../SortMenu";
import { FilterMenu } from "../FilterMenu";
import { Card } from "../Card";
import { Form } from "../Form";

export function SearchPage() {
  const [searchCards, setSearchCards] = useState(data);

  const [filteredCards, setFilteredCards] = useState(searchCards);

  const filterCards = (event) => {
    const selectCoat = searchCards.filter((card) => card.type === "coat");
    const selectShirt = searchCards.filter((card) => card.type === "shirt");
    const selectTshirt = searchCards.filter((card) => card.type === "t-shirt");
    const selectTrousers = searchCards.filter((card) => card.type === "trousers");
    if (event.target.id === "all") {
      setFilteredCards(searchCards);
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

  const searchCard = (inputValue) => {
    if (inputValue) {
      setSearchCards([
        ...data.filter(
          (card) =>
            card.title.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase()) ||
            card.brand.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase()) ||
            card.description.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())
        ),
      ]);
    } else {
      setSearchCards(data);
    }
  };

  return (
    <div className={styles.home__container}>
      <Menu
        items={categories}
        filterCards={filterCards}
        onSelectItem={(item) => console.log(item)}
      />
      <SortMenu
        // items={sorts}
        onClickItem={(name) => console.log(name)}
      />
      <FilterMenu items={filters} onClickItem={(name) => console.log(name)} />
      <div className={styles.emojiListWrapp}>
        <Form searchCard={searchCard} />
        <ul className={styles.main}>
          {searchCards.map((item) => {
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
          {/* {filteredCards.map((item) => {
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
          })} */}
        </ul>
      </div>
    </div>
  );
}
