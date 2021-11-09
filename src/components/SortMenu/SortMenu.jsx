import React, { useState } from "react";
import styles from "./SortMenu.module.css";

export function SortMenu({ sortUpdateUp, sortUpdateDown, sortLowToHight, sortHightToLow }) {
  return (
    <div className={styles.wrap}>
      <div className={styles.main}>
        <span className={styles.title}>Сортировка по:</span>
        <div className={styles.sort} onClick={() => sortUpdateUp()}>
          update up
        </div>
        <div className={styles.sort} onClick={() => sortUpdateDown()}>
          update down
        </div>
        <div className={styles.sort} onClick={() => sortLowToHight()}>
          price up
        </div>
        <div className={styles.sort} onClick={() => sortHightToLow()}>
          price down
        </div>
      </div>
    </div>
  );
}
