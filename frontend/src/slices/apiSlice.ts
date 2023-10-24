import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants";

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });
export const apiSlice = createApi({
    baseQuery,
    tagTypes: ["Product", "Slide", "Order", "User"],
    endpoints: builder => ({
        // getProducts: builder.query({
        //     query: () => "/api/products",
        // }),
        // getProductById: builder.query({
        //     query: id => `/api/products/${id}`,
        // }),
        // getSlides: builder.query({
        //     query: () => "/api/slides",
        // }),
        // getOrders: builder.query({
        //     query: () => "/api/orders",
    }),
    // getOrderById: builder.query({
    //     query: id => `/api/orders/${id}`,
    // }),
    // getUsers: builder.query({
    //     query: () => "/api/users",
    // }),
    // getUserById: builder.query({
    //     query: id => `/api/users/${id}`,
    // }),
});
// });
