import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'auth',
  tagTypes: ['Token'],
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
  }),
  endpoints: build => ({
    login: build.mutation({
      query: name => ({
        url: '/api/v1/auth/login',
        method: 'POST',
        body: { value: name },
      }),
      // providesTags: res => [{}, {}],
    }),
  }),
});

export const { useLoginMutation } = authApi;
