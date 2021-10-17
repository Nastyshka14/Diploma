import styles from "./Menu.module.css";

export function Menu() {
  return (
    <div className={styles.menu__container}>
      <div className={styles.catalog}>
        <span className={styles.hoverable}>
          <a className={styles.mag} href="/ru/search/c.1473502940140554914-82-2-118-181841690">
            <svg width="20" height="20" viewBox="0 0 20 20" className={styles.icon}>
              <g
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M15 10H3M9 16l-6-6 6-6"></path>
              </g>
            </svg>
            <span className={styles.title}>Одежда</span>
          </a>
        </span>
        <a className={styles.lingerie} href="/ru/search/c.1473502940263333473-121-2-118-2022998188">
          <span className={styles.lingerie__title}>Нижнее белье</span>
        </a>
        <a
          className={styles.sweater__title}
          href="/ru/search/c.1555344165093826876-25-2-26202-3796346805"
        >
          <span className={styles.sweater}>Свитера и кардиганы</span>
        </a>
        <a
          className={styles.dresss__title}
          href="/ru/search/c.1555408969939570690-114-2-26251-3118583900"
        >
          <span className={styles.dress}>Платья и сарафаны</span>
        </a>
        <a
          className={styles.trousers__title}
          href="/ru/search/c.1473502940229885406-112-2-118-2454251350"
        >
          <span className={styles.trousers}>Штаны и брюки</span>
        </a>
        <a className={styles.blouse} href="/ru/search/c.1473502940434879164-183-2-118-2658636360">
          <span className={styles.blouse__title}>Блузки и рубашки</span>
        </a>
        <a className={styles.coat} href="/ru/search/c.1473502940324957518-144-2-118-3933330995">
          <span className={styles.coat__title}>Пальто и куртки</span>
        </a>
        <a className={styles.shirt} href="/ru/search/c.1473502940429633273-181-2-118-280686249">
          <span className={styles.shirt__title}>Футболки и топы</span>
        </a>
        <a className={styles.swimwear} href="/ru/search/c.1473502940404958695-172-2-118-14263569">
          <span className={styles.swimwear__title}>Купальники и пляжная одежда</span>
        </a>
        <a className={styles.homewear} href="/ru/search/c.1473502940351363801-154-2-118-3424822835">
          <span className={styles.homewear__title}>Одежда для дома и сна</span>
        </a>
        <a className={styles.skirt} href="/ru/search/c.1473502940250348794-117-2-118-3264855076">
          <span className={styles.skirt__title}>Юбки</span>
        </a>
        <a className={styles.socks} href="/ru/search/c.1473502940371274580-161-2-118-1847028997">
          <span className={styles.socks__title}>Носки, чулки, колготки</span>
        </a>
        <a className={styles.sportwear} href="/ru/search/c.1555344278894691894-27-2-719-204924196">
          <span className={styles.sportwear__title}>Спортивная одежда</span>
        </a>
        <a
          className={styles.weddingwear}
          href="/ru/search/c.1555344400629950133-28-2-643-4097966098"
        >
          <span className={styles.weddingwear__title}>Одежда на свадьбу</span>
        </a>
        <a className={styles.jeans} href="/ru/search/c.1473502940232817530-113-2-118-228026538">
          <span className={styles.jeans__title}>Джинсы</span>
        </a>
        <a className={styles.shorts} href="/ru/search/c.1473502940247885718-116-2-118-2710504227">
          <span className={styles.shorts__title}>Шорты</span>
        </a>
        <a className={styles.jumpsuits} href="/ru/search/c.1473502940348914776-153-2-118-843299859">
          <span className={styles.jumpsuits__title}>Комбинезоны</span>
        </a>
        <a className={styles.suits} href="/ru/search/c.1473502940391654309-167-2-118-1708872540">
          <span className={styles.suits__title}>Костюмы</span>
        </a>
        <a className={styles.jacket} href="/ru/search/c.1476800431344898406-106-2-26341-813084249">
          <span className={styles.jacket__title}>Пиджаки</span>
        </a>
      </div>
    </div>
  );
}
