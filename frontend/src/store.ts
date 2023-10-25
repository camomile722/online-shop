import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlice";
import cartSliceReducer from "./slices/cartSlice";
import wishListSliceReducer from "./slices/wishListSlice";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        cart: cartSliceReducer,
        wishList: wishListSliceReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
});
