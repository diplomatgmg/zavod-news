import { type ReactElement } from 'react'
import { useGetNewsQuery } from '../../redux/api'
import NewsItem from './NewsItem'

const NewsList = (): ReactElement => {
  const {
    data
  } = useGetNewsQuery({})

  return (
    <ul>
      {data?.results.map((item) => <NewsItem key={item.id} news={item}/>)}
    </ul>
  )
}

export default NewsList
