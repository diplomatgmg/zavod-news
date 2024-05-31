import { isRouteErrorResponse, useRouteError } from 'react-router-dom'
import { type ReactElement } from 'react'
import NotFound from '../components/pages/errors/NotFound'

const RootBoundary = (): ReactElement => {
  const error = useRouteError()

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return <NotFound/>
    }

    if (error.status === 418) {
      return <div>🫖</div>
    }
  }

  return <div>Something went wrong</div>
}

export default RootBoundary
