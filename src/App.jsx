// import { useState, createContext } from "react";
// import { Provider, useSelector, useDispatch } from "react-redux";
import { SliderContainer } from "./components/Slider";
import styles from "./App.css";
import { RootRouter } from "./router/RootRouter";
// import { store } from "./redux/store";
// import { RootRouter } from "./router/RootRouter";

function App() {
  return (
    <div className={styles.App}>
      <RootRouter />
      <SliderContainer />
    </div>
  );
}

export default App;
