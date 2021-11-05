import React, { useState } from "react";
import styles from "./CardMenu.module.css";
import { Card } from "../Card";
import data from "../../data/data.json";

export function CardMenu() {
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
              price={item.price}
              select={item.select}
            />
          );
        })}
      </div>
    </div>
  );
}
