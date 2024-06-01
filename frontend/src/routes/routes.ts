const routes = {
  home: '/',
  news: '/news/',
  newsDetail: (newsId: string | number) => `/news/${newsId}/`,
  createNews: '/news/create/',
  deleteNews: (newsId: string | number) => `/news/delete/${newsId}/`,
  likeNews: (newsId: string | number) => `/news/like/${newsId}/`,
  dislikeNews: (newsId: string | number) => `/news/dislike/${newsId}/`
}

export default routes
