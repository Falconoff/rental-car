import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    cars: (state = [], action) => {
      switch (action.type) {
        case "cars/setCars":
          return action.payload;
        default:
          return state;
      }
    },
    brands: (state = [], action) => {
      switch (action.type) {
        case "brands/setBrands":
          return action.payload;
        default:
          return state;
      }
    },
    prices: (state = [], action) => {
      switch (action.type) {
        case "prices/setPrices":
          return action.payload;
        default:
          return state;
      }
    },
  },
});
