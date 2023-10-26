import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductProps } from "../components/product/ProductItem";
import { updateWisList } from "../utils/wishListUtils";

export interface WishListProps {
    items: ProductProps[];
    numberOfItems: number;
}
const initialState: WishListProps = localStorage.getItem("wishList")
    ? JSON.parse(localStorage.getItem("wishList") || "")
    : { items: [], numberOfItems: 0 };

const wishListSlice = createSlice({
    name: "wishList",
    initialState,
    reducers: {
        toggleToWishList: (state, action: PayloadAction<ProductProps>) => {
            const item = action.payload;
            const existItem = state.items.find(
                (x: ProductProps) => x._id === item._id
            );
            if (!existItem) {
                state.items = [...state.items, item];
            } else {
                state.items = state.items.filter(
                    (x: ProductProps) => x._id !== item._id
                );
            }
            console.log(state, "state");

            return updateWisList(state);
        },
    },
});

export const { toggleToWishList } = wishListSlice.actions;

export default wishListSlice.reducer;
