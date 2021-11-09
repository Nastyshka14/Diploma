import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { cart } from "./reducers/cart";
import { card } from "./reducers/card";
import { favorites } from "./reducers/favorites";

export const store = createStore(combineReducers({ cart, card, favorites }), composeWithDevTools());
