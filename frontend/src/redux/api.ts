import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { type TNewsResponse } from '../types/responses'
import { type TNews, type TSearchParams } from '../types/types'
import routes from '../routes/routes'

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8000/api/'
  }),
  tagTypes: ['News'],
  endpoints: (build) => ({
    getNews: build.query<TNewsResponse, TSearchParams>({
      query: (params) => ({
        url: routes.news,
        params
      }),
      providesTags: ['News'],
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName
      },
      merge: (currentCache, newCache) => {
        currentCache.results.push(...newCache.results)
      },
      forceRefetch: ({ currentArg, previousArg }) => {
        return currentArg?.page !== previousArg?.page
      }

    }),
    getNewsById: build.query<TNews, string>({
      query: (id: string) => ({
        url: routes.newsDetail(id)
      })
    }),
    createNews: build.mutation<TNews, Omit<TNews, 'id'>>({
      query: (body) => ({
        url: routes.createNews,
        method: 'POST',
        body
      })
    }),
    deleteNews: build.mutation<TNews, number>({
      query: (id) => ({
        url: routes.deleteNews(id),
        method: 'DELETE'
      }),
      invalidatesTags: ['News']
    }),
    likeNews: build.mutation<TNews, number>({
      query: (id) => ({
        url: routes.likeNews(id),
        method: 'POST'
      }),
      invalidatesTags: ['News']
    }),
    dislikeNews: build.mutation<TNews, number>({
      query: (id) => ({
        url: routes.dislikeNews(id),
        method: 'POST'
      })
    })
  })
})

export const {
  useGetNewsQuery,
  useGetNewsByIdQuery,
  useCreateNewsMutation,
  useDeleteNewsMutation,
  useLikeNewsMutation,
  useDislikeNewsMutation
} = api

export default api
