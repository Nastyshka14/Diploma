import { ACTIONS } from "../constants";
import data from "../../data/data.json";
import { isEmptyBindingElement } from "typescript";

const defaultState = {
  cards: data,
  filteredCards: data,
  showFilters: false,
  showBrands: false,
  type: "ALL",
  cart: [],
  total: 0,
};

export const card = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.ADD_CARD: {
      const haveInCart = state.cart.find((item) => item.id === action.id);
      if (haveInCart) {
        return state;
      }

      const findInData = state.filteredCards.find((item) => item.id === action.id);
      console.log(findInData);
      const updatedCart = [...state.cart, findInData];
      const total = haveInCart
        ? updatedCart.reduce((accumulator, item) => accumulator + parseInt(item.price), 0)
        : updatedCart.reduce((accumulator, item) => accumulator + parseInt(item.price), 0);

      return { ...state, cart: [...state.cart, findInData], total: total };
    }
    case ACTIONS.DELETE_CARD: {
      const updatedCart = state.cart.filter((item) => item.id !== action.id);
      return { ...state, cart: updatedCart };
    }

    case ACTIONS.SORT_UPDATE_UP: {
      const filteredCards = [...state.filteredCards.sort((a, b) => a.id - b.id)];
      return {
        ...state,
        filteredCards: filteredCards,
      };
    }

    case ACTIONS.SORT_UPDATE_DOWN: {
      const filteredCards = [...state.filteredCards.sort((a, b) => b.id - a.id)];
      return {
        ...state,
        filteredCards: filteredCards,
      };
    }

    case ACTIONS.SORT_LOW_TO_HIGHT: {
      const filteredCards = [
        ...state.filteredCards.sort((a, b) => parseInt(a.price) - parseInt(b.price)),
      ];
      return {
        ...state,
        filteredCards: filteredCards,
      };
    }

    case ACTIONS.SORT_HIGHT_TO_LOW: {
      const filteredCards = [
        ...state.filteredCards.sort((a, b) => parseInt(b.price) - parseInt(a.price)),
      ];
      return {
        ...state,
        filteredCards: filteredCards,
      };
    }

    case ACTIONS.SHOW_FILTERS: {
      return {
        ...state,
        showFilters: !state.showFilters,
      };
    }

    case ACTIONS.SHOW_BRANDS: {
      return {
        ...state,
        showBrands: !state.showBrands,
      };
    }

    case ACTIONS.SEARCH: {
      const filteredCards = data.filter(
        (card) =>
          card.title.toLowerCase().includes(action.inputValue.toLowerCase()) ||
          card.brand.toLowerCase().includes(action.inputValue.toLowerCase()) ||
          card.description.toLowerCase().includes(action.inputValue.toLowerCase())
      );
      return {
        ...state,
        cards: filteredCards,
        filteredCards: filteredCards,
      };
    }

    case ACTIONS.FILTER: {
      const filteredCards =
        action.id === "All"
          ? (state.filteredCards = state.cards)
          : state.cards.filter((card) => card.brand === action.id);

      return {
        ...state,
        filteredCards: filteredCards,
      };
    }

    case ACTIONS.RESET_FILTER: {
      const filteredCards = (state.filteredCards = state.cards);

      return {
        ...state,
        filteredCards: filteredCards,
      };
    }

    case ACTIONS.INCREMENT: {
      const updatedCart = state.cart.map((item) =>
        item.id === action.id
          ? { ...item, count: item.count - 1, price: parseInt(item.price) / 2 }
          : item
      );

      return { ...state, cart: updatedCart };
    }
    case ACTIONS.DECREMENT: {
      const updatedCart = state.cart.map((item) =>
        item.id === action.id
          ? { ...item, count: item.count + 1, price: parseInt(item.price) * 2 }
          : item
      );
      const total = updatedCart.reduce(
        (accumulator, item) => accumulator + parseInt(item.price),
        0
      );
      return { ...state, cart: updatedCart, total: total };
    }
    case ACTIONS.INCREMENT: {
      const updatedCart = state.cart.map((item) =>
        item.id === action.id
          ? { ...item, count: item.count - 1, price: parseInt(item.price) / 2 }
          : item
      );
      const total = updatedCart.reduce(
        (accumulator, item) => accumulator + parseInt(item.price),
        0
      );
      return { ...state, cart: updatedCart, total: total };
    }
    default:
      return state;
  }
};
