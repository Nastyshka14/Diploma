// import { ACTIONS } from "../constants";
// import data from "../../data/data.json";

// const defaultState = {
//   cart: [],
//   data: data,
//   total: 0,
// };

// export const cart = (state = defaultState, action) => {
//   switch (action.type) {
//     case ACTIONS.ADD_CARD: {
//       const updatedCart = [...state.cart, action.newCard];
//       const ggg = updatedCart.map((item) =>
//         item.id === action.id ? console.log(action.id) : console.log(action.id)
//       );
//       console.log(ggg);
//       return { ...state, cart: ggg };
//     }
//     case ACTIONS.DELETE_CARD: {
//       const updatedCart = state.cart.filter((item) => item.id !== action.id);
//       return { ...state, cart: updatedCart };
//     }
//     case ACTIONS.TOTAL: {
//       const total = state.cart.reduce(
//         (accumulator, item) => accumulator + parseInt(item.price) * item.count,
//         0
//       );
//       return { ...state, total: total };
//     }
//     // case ACTIONS.COUNTER: {
//     //   const count = state.cart.find((item) => item.id !== action.id) ? state.cart :

//     //   return { ...state, count: count };
//     // }

//     // const isCardInCart = state.cart.find((item) => item.id !== action.id);
//     //   const updatedCart = isCardInCart
//     //     ? state.cart.filter((index, item) => ({ ...item, count: (item.count += 1) }))
//     //     : [...state.cart, action.newCard];

//     default:
//       return state;
//   }
// };
