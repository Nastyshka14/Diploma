import { React, useState } from "react";
import { Card } from "../Card";
import { Form } from "../Form";
import styles from "./SearchInput.module.css";

export function SearchInput({ data }) {
  const [emojies, setEmojies] = useState(data);

  const searchEmoji = (inputValue) => {
    if (inputValue) {
      setEmojies([
        ...data.filter(
          (emoji) =>
            emoji.title.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase()) ||
            emoji.brand.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase()) ||
            emoji.description.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())
        ),
      ]);
    } else {
      setEmojies(data);
    }
  };
  return (
    <div className={styles.emojiListWrapp}>
      <Form searchEmoji={searchEmoji} />
      <ul className={styles.emojiList}>
        {emojies.map((item) => {
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
      </ul>
    </div>
  );
}
