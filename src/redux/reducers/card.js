import { ACTIONS } from "../constants";
import data from "../../data/data.json";
const defaultState = {
  cards: data,
  filteredCards: data,
  show: false,
  type: "ALL",
};

export const card = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.SHOW_ABOUT: {
      const filteredCards = state.cards.filter((item) => item.id === action.id);
      return {
        ...state,
        cards: filteredCards,
        filteredCards: filteredCards,
      };
    }
    case ACTIONS.SORT_UPDATE_UP: {
      const filteredCards = [...state.cards.sort((a, b) => a.id - b.id)];
      return {
        ...state,
        cards: filteredCards,
        filteredCards: filteredCards,
      };
    }

    case ACTIONS.SORT_UPDATE_DOWN: {
      const filteredCards = [...state.cards.sort((a, b) => b.id - a.id)];
      return {
        ...state,
        cards: filteredCards,
        filteredCards: filteredCards,
      };
    }

    case ACTIONS.SORT_LOW_TO_HIGHT: {
      const filteredCards = [...state.cards.sort((a, b) => parseInt(a.price) - parseInt(b.price))];
      return {
        ...state,
        cards: filteredCards,
        filteredCards: filteredCards,
      };
    }

    case ACTIONS.SORT_HIGHT_TO_LOW: {
      const filteredCards = [...state.cards.sort((a, b) => parseInt(b.price) - parseInt(a.price))];
      return {
        ...state,
        cards: filteredCards,
        filteredCards: filteredCards,
      };
    }

    default:
      return state;
  }
};
