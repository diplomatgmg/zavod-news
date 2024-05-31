import { type ReactElement } from 'react'
import { useGetNewsQuery } from './redux/api'

const App = (): ReactElement => {
  const {
    data = []
  } = useGetNewsQuery({})

  return (
    <pre>
      {JSON.stringify(data, null, 2)}
    </pre>
  )
}

export default App
