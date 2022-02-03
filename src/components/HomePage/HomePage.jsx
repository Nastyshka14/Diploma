import styles from "./HomePage.module.css";
import { Menu } from "../Menu";
import filters from "../../data/filter.json";
import { SortMenu } from "../SortMenu";
import { FilterMenu } from "../FilterMenu";
import { Card } from "../Card";
import { useDispatch, useSelector } from "react-redux";
import { ACTIONS } from "../../redux/constants";

export function HomePage() {
  const filteredCards = useSelector((state) => state.card.filteredCards);

  const dispatch = useDispatch();

  const resetFilter = () => {
    dispatch({ type: ACTIONS.RESET_FILTER });
  };

  const addToCart = (id) => {
    dispatch({ type: ACTIONS.ADD_CARD, id });
  };
  // const total = () => {
  //   dispatch({ type: ACTIONS.TOTAL });
  // };
  const filter = (id) => {
    dispatch({ type: ACTIONS.FILTER, id });
  };

  const addToFavorites = (newCard, id) => {
    dispatch({ type: ACTIONS.ADD_TO_FAVORITES, newCard, id });
  };

  const showCard = (id) => {
    dispatch({ type: ACTIONS.SHOW_ABOUT, id });
  };
  const sortUpdateUp = () => {
    dispatch({ type: ACTIONS.SORT_UPDATE_UP });
  };

  const showFilters = () => {
    dispatch({ type: ACTIONS.SHOW_FILTERS });
  };

  const showBrands = () => {
    dispatch({ type: ACTIONS.SHOW_BRANDS });
  };

  const sortUpdateDown = () => {
    dispatch({ type: ACTIONS.SORT_UPDATE_DOWN });
  };

  const sortLowToHight = () => {
    dispatch({ type: ACTIONS.SORT_LOW_TO_HIGHT });
  };

  const sortHightToLow = () => {
    dispatch({ type: ACTIONS.SORT_HIGHT_TO_LOW });
  };

  return (
    <div className={styles.wrap}>
      <Menu />
      <div className={styles.container}>
        <div className={styles.filters}>
          <SortMenu
            sortUpdateUp={sortUpdateUp}
            sortUpdateDown={sortUpdateDown}
            sortHightToLow={sortHightToLow}
            sortLowToHight={sortLowToHight}
          />
          <FilterMenu showFilters={showFilters} showBrands={showBrands} filter={filter} />
        </div>
        <div className={styles.items}>
          <div className={styles.main}>
            {filteredCards.map((item) => {
              return (
                <Card
                  key={item.id}
                  id={item.id}
                  brand={item.brand}
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  count={item.count}
                  addToCart={addToCart}
                  addToFavorites={addToFavorites}
                  showCard={showCard}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
