import { createBrowserRouter } from 'react-router-dom'
import NewsPage from '../components/pages/NewsPage/NewsPage'
import App from '../App'
import RootBoundary from './RootBoundary'
import MainPage from '../components/pages/MainPage/MainPage'
import NewsDetailPage from '../components/pages/NewsDetailPage/NewsDetailPage'

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
  }
])

export default router
