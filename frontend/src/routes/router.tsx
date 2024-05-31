import { createBrowserRouter } from 'react-router-dom'
import NewsPage from '../components/pages/NewsPage/NewsPage'
import App from '../App'
import RootBoundary from './RootBoundary'
import MainPage from '../components/pages/MainPage/MainPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App><MainPage /></App>,
    errorElement: <App><RootBoundary /></App>
  },
  {
    path: '/news',
    element: <App><NewsPage /></App>
  }
])

export default router
