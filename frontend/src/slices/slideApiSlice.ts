import { SLIDES_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const slidesApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getSlides: builder.query({
            query: () => ({ url: SLIDES_URL }),
            keepUnusedDataFor: 5,
        }),
    }),
    overrideExisting: false,
});

export const { useGetSlidesQuery } = slidesApiSlice;
