import { useState } from "react";
import styles from "./User.module.css";

export function User() {
  const [loginInput, setLoginInput] = useState("");
  const [passInput, setPassInput] = useState("");

  const onBtnClick = () => {
    setLoginInput("");
    setPassInput("");
  };

  return (
    <div className={styles.user__container}>
      <div className={styles.user__window}>
        <form className={styles.user__form}>
          <span className={styles.user__form_title}>Вход</span>
          <div className={styles.user__create}>
            <a role="button" className={styles.user__create_btn}>
              Создать аккаунт
            </a>
          </div>
          <div className={styles.user__login}>
            <div className={styles.user__input}>
              <div className={styles.user__input_group}>
                <input
                  name="Электронная почта"
                  aria-label=""
                  placeholder="Введите свой email"
                  title="Введите свой email"
                  autocomplete="email"
                  className={styles.user__input_input}
                  type="email"
                  value={loginInput}
                  onChange={(e) => setLoginInput(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className={styles.user__input} autocomplete="current-password">
            <div className={styles.user__input_group}>
              <input
                name="Пароль"
                aria-label=""
                placeholder="Введите пароль"
                autocomplete="current-password"
                className={styles.user__input_input}
                type="password"
                value={passInput}
                onChange={(e) => setPassInput(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.user__entrance}>
            <button
              type="submit"
              aria-label="Войти"
              role="button"
              className={styles.user__entrance_btn}
              // disabled="disabled"
              onClick={onBtnClick}
            >
              Войти
            </button>
            <div className={styles.user__recovery}>
              <a role="button" className={styles.user__recovery_btn}>
                Забыли пароль?
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
