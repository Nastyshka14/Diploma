import { ACTIONS } from "../constants";

const defaultState = {
  cart: [],
};

export const cart = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.ADD_CARD: {
      const updatedCart = [...state.cart, action.newCard];
      return { ...state, cart: updatedCart };
    }
    case ACTIONS.DELETE_CARD: {
      const updatedCart = state.cart.filter((item) => item.id !== action.id);
      return { ...state, cart: updatedCart };
    }
    default:
      return state;
  }
};
