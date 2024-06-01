const routes = {
  home: '/',
  news: '/news/',
  newsDetail: (newsId: string | number) => `/news/${newsId}/`,
  createNews: '/news/create/',
  deleteNews: (newsId: string | number) => `/news/delete/${newsId}/`
}

export default routes
