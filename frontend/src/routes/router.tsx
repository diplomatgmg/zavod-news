import { createBrowserRouter } from 'react-router-dom'
import NewsPage from '../pages/NewsPage/NewsPage'
import App from '../App'
import RootBoundary from './RootBoundary'
import MainPage from '../pages/MainPage/MainPage'
import NewsDetailPage from '../pages/NewsDetailPage/NewsDetailPage'
import NewsForm from '../forms/News/NewsForm'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App><MainPage /></App>,
    errorElement: <App><RootBoundary /></App>
  },
  {
    path: '/news',
    element: <App><NewsPage /></App>
  },
  {
    path: '/news/:newsId',
    element: <App><NewsDetailPage /></App>
  },
  {
    path: '/news/tag/:tag',
    element: <App><NewsPage /></App>
  },
  {
    path: '/news/create/',
    element: <App><NewsForm /></App>
  }
])

export default router
