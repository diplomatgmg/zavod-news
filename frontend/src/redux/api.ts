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
      }),
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName
      },
      merge: (currentCache, newItems) => {
        currentCache.results.push(...newItems.results)
      },
      forceRefetch: ({ currentArg, previousArg }) => {
        return currentArg !== previousArg
      }
    }),
    getNewsById: build.query<TNews, string>({
      query: (id: string) => ({
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
