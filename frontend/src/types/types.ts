interface TTag {
  id: number
  name: string
}

interface TNews {
  id: number
  title: string
  content: string
  image: string
  tags: TTag[]
  likes: number
  dislikes: number
}

interface TNewsSummary {
  id: number
  title: TNews['title']
  image: TNews['image']
  tags: TNews['tags']
  likes: TNews['likes']
  dislikes: TNews['dislikes']
}

interface TSearchParams {
  page: number
  limit: number
  offset: number
}

export type {
  TTag,
  TNews,
  TNewsSummary,
  TSearchParams
}
