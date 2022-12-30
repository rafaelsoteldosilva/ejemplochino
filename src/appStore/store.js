import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../slices/restaurantMenuSlice";

const store = configureStore({
    reducer: {
        restaurantMenu: menuReducer,
    },
});

export default store;
