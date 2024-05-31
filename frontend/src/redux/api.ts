import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { type TNewsResponse } from '../types/responses'
import { type TNews, type TSearchParams } from '../types/types'
import routes from '../routes/routes'

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8000/api/'
  }),
  endpoints: (build) => ({
    getNews: build.query<TNewsResponse, TSearchParams>({
      query: (params) => ({
        url: routes.news,
        params
      })
    }),
    getNewsById: build.query<TNews, string>({
      query: (id) => ({
        url: routes.newsDetail(id)
      })
    })
  })
})

export const {
  useGetNewsQuery,
  useGetNewsByIdQuery
} = api

export default api
