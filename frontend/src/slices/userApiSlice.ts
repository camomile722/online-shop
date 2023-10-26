import { USERS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getUsers: builder.query({
            query: () => ({ url: USERS_URL }),
            keepUnusedDataFor: 5,
        }),
        getUserById: builder.query({
            query: id => `${USERS_URL}/${id}`,
            keepUnusedDataFor: 5,
        }),
    }),
    overrideExisting: false,
});

export const { useGetUsersQuery, useGetUserByIdQuery } = usersApiSlice;
