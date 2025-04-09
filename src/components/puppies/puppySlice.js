import { buildErrorMessage } from "vite";
import api from "../../api/api";

/*
TODO: Define the following 4 endpoints:
  1. getPuppies (query) - Done
  2. getPuppy (query) - Done
  3. addPuppy (mutation) - Done
  4. deletePuppy (mutation) - Done

The query endpoints should provide the "Puppy" tag.
The mutation endpoints should invalidate the "Puppy" tag.

(Optional) TODO: Write `transformResponse` and `transformErrorResponse`
functions for each endpoint.
*/

const puppyApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPuppies: build.query({
      query: ({ id, name, imageURL }) => ({
        url: "/players",
        method: "GET",
        body: {
          id,
          name,
          imageURL,
        },
      }),
      providesTags: ["Puppy"],
    }),
    getPuppy: build.query({
      query: ({ id, breed, status }) => ({
        url: "/players",
        method: "GET",
        body: {
          id,
          breed,
          status,
        },
      }),
      providesTags: ["Puppy"],
    }),
    addPuppy: build.mutation({
      mutation: ({ name, breed, status, imageURL }) => ({
        url: "/players",
        method: "POST",
        body: {
          name,
          breed,
          status,
          imageURL,
        },
      }),
      invalidatesTags: ["Puppy"],
    }),
    deletePuppy: build.mutation({
      mutation: ({ id }) => ({
        url: "/players",
        method: "DELETE",
        body: {
          id,
        },
      }),
      invalidatesTags: ["Puppy"],
    }),
  }),
});

export const {
  useGetPuppiesQuery,
  useGetPuppyQuery,
  useAddPuppyMutation,
  useDeletePuppyMutation,
} = puppyApi;
