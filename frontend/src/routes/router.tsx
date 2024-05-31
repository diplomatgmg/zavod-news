import { createBrowserRouter } from 'react-router-dom'
import NewsContainer from '../containers/NewsContainer'
import App from '../App'
import Main from '../components/Main/Main'
import RootBoundary from './RootBoundary'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App><Main /></App>,
    errorElement: <App><RootBoundary /></App>
  },
  {
    path: '/news',
    element: <App><NewsContainer /></App>
  }
])

export default router
