import React from "react";
import styles from "./CardMenu.module.css";
import { Card } from "../Card";
import data from "../../data/data.json";

export function CardItem() {
  return (
    <div className={styles.wrap}>
      <div className={styles.main}>
        {data.map((item) => {
          return (
            <Card
              key={item.id}
              brand={item.brand}
              id={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
              price={item.price}
              select={item.select}
            />
          );
        })}
      </div>
    </div>
  );
}
