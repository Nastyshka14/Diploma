import React, { useState } from "react";
import styles from "./SortMenu.module.css";

export function SortMenu({ sortUpdateUp, sortUpdateDown, sortLowToHight, sortHightToLow }) {
  return (
    <div className={styles.wrap}>
      <div className={styles.main}>
        <span className={styles.title}>Сортировка по:</span>
        <button className={styles.sort} onClick={() => sortUpdateUp()}>
          update up
        </button>
        <button className={styles.sort} onClick={() => sortUpdateDown()}>
          update down
        </button>
        <button className={styles.sort} onClick={() => sortLowToHight()}>
          price up
        </button>
        <button className={styles.sort} onClick={() => sortHightToLow()}>
          price down
        </button>
      </div>
    </div>
  );
}
