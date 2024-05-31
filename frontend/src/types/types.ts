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
}

interface TNewsSummary {
  id: number
  title: TNews['title']
  image: TNews['image']
  tags: TNews['tags']
}

export type {
  TTag,
  TNews,
  TNewsSummary
}
