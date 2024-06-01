import { isRouteErrorResponse, useRouteError } from 'react-router-dom'
import { type ReactElement } from 'react'
import NotFoundPage from '../pages/ErrorPages/NotFoundPage/NotFoundPage'

const RootBoundary = (): ReactElement => {
  const error = useRouteError()

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return <NotFoundPage/>
    }

    if (error.status === 418) {
      return <div>🫖</div>
    }
  }

  return <div>Something went wrong</div>
}

export default RootBoundary
