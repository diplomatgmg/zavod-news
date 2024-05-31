import { type ReactElement } from 'react'
import { useGetNewsQuery } from './redux/api'

const App = (): ReactElement => {
  const {
    data
  } = useGetNewsQuery({})

  return (
    <ul>
      {data?.results.map((item) => (
        <li key={item.id}>
          <h3>{item.title}</h3>
          <img src={item.image} width={200}></img>
          <p><b>Tags:</b> {item.tags.map(tag => tag.name).join(', ')}</p>
        </li>
      ))}
    </ul>
  )
}

export default App
