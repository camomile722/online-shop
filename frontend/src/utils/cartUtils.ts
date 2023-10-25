import { ProductProps } from "../components/product/ProductItem";

export interface CartItemsProps {
    cartItems: ProductProps[];
    shippingAddress: string;
    paymentMethod: string;
    itemsPrice: number;
    shippingPrice: number;
    taxPrice: number;
    totalPrice: number;
}

const addDecimals = (num: number) => {
    return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state: CartItemsProps) => {
    // Calculate items price

    state.itemsPrice = Number(
        addDecimals(
            state.cartItems.reduce(
                (acc: number, item: ProductProps) =>
                    acc + item.price * item.qty,
                0
            )
        )
    );
    // Calculate shipping price

    state.shippingPrice = state.itemsPrice > 29.9 ? 0 : 5.99;
    // Calculate tax price

    state.taxPrice = Number(
        addDecimals(Number((0.15 * state.itemsPrice).toFixed(2)))
    );
    // Calculate total price

    state.totalPrice = Number(
        (
            Number(state.itemsPrice) +
            Number(state.shippingPrice) +
            Number(state.taxPrice)
        ).toFixed(2)
    );

    localStorage.setItem("cart", JSON.stringify(state));

    return state;
};
