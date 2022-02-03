import { React, useState } from "react";

import styles from "./Form.module.css";

export function Form({ searchCard }) {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
    searchCard(event.target.value);
  };

  return (
    <div className={styles.form}>
      <input type="text" value={inputValue} placeholder="I search ..." onChange={onInputChange} />
    </div>
  );
}
