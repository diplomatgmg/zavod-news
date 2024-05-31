import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8000'
  }),
  endpoints: (build) => ({
    getNews: build.query({
      query: () => 'news/'
    })
  })
})

export const {
  useGetNewsQuery
} = api

export default api
