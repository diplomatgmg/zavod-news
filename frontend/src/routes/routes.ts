const routes = {
  home: '/',
  news: '/news',
  newsDetail: (newsId: number) => `/news/${newsId}`,
  newsTag: (tag: string) => `/news/tag/${tag}`
}

export default routes
