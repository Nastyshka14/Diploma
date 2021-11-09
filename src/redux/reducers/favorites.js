import { ACTIONS } from "../constants";

const defaultState = {
  favorites: [],
};

export const favorites = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TO_FAVORITES: {
      const updatedFavorites = [...state.favorites, action.newCard];
      return { ...state, favorites: updatedFavorites };
    }
    default:
      return state;
  }
};
