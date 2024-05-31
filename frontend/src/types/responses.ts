import { type TNewsSummary } from './types'

interface TNewsResponse {
  count: number
  next: string | null
  previous: string | null
  results: TNewsSummary[]
}

export type {
  TNewsResponse
}
