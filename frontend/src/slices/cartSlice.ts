import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProductProps } from "../components/product/ProductItem";
import { CartItemsProps, updateCart } from "../utils/cartUtils";

export interface CartProps {
    cart: CartItemsProps;
}
const initialState = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart") || "")
    : {
          cartItems: [],
          shippingAddress: {},
          paymentMethod: "",
          itemsPrice: 0,
          taxPrice: 0,
          shippingPrice: 0,
          totalPrice: 0,
      };

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<ProductProps>) => {
            const item = action.payload;
            const existItem = state.cartItems.find(
                (x: ProductProps) => x._id === item._id
            );
            if (existItem) {
                state.cartItems = state.cartItems.map((x: ProductProps) =>
                    x._id === existItem._id ? { ...x, qty: x.qty + 1 } : x
                );
            } else {
                state.cartItems = [...state.cartItems, item];
            }
            // state.cartItems = [...state.cartItems, item];
            return updateCart(state);
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            state.cartItems = state.cartItems.filter(
                (x: ProductProps) => x._id !== action.payload
            );
            return updateCart(state);
        },
        changeQty: (state, action: PayloadAction<ProductProps>) => {
            const item = action.payload;
            const existItem = state.cartItems.find(
                (x: ProductProps) => x._id === item._id
            );
            if (existItem) {
                state.cartItems = state.cartItems.map((x: ProductProps) =>
                    x._id === existItem._id ? { ...x, qty: item.qty } : x
                );
            }
            return updateCart(state);
        },
    },
});

export const { addToCart, removeFromCart, changeQty } = cartSlice.actions;
export default cartSlice.reducer;
