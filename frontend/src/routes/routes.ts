const routes = {
  home: '/',
  news: '/news/',
  newsDetail: (newsId: string | number) => `/news/${newsId}/`
}

export default routes
