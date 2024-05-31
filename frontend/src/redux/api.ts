import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { type TNewsResponse } from '../types/responses'

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8000'
  }),
  endpoints: (build) => ({
    getNews: build.query<TNewsResponse, unknown>({
      query: () => 'news/'
    })
  })
})

export const {
  useGetNewsQuery
} = api

export default api
