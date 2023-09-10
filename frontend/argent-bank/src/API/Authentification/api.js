import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/api/v1/user",
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
    updateUsername: builder.mutation({
      query: ({ token, newUserName }) => ({
        url: "/profile",
        method: "PUT",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: {
          userName: newUserName,
        },
      }),
    }),
    getProfile: builder.mutation({
      query: (token) => ({
        url: "/profile",
        method: "POST",
        body: "",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
          Authorization: token,
        },
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useGetProfileMutation,
  useUpdateUsernameMutation,
} = api;
