import { type FC, type ReactElement } from 'react'
import NewsItem from './NewsItem'
import { type TNews, type TNewsSummary } from '../../types/types'

interface NewsListProps {
  news: TNews[] | TNewsSummary[]
}

const NewsList: FC<NewsListProps> = ({ news }): ReactElement => {
  return (
    <ul>
      {news.map((item) => <NewsItem key={item.id} news={item}/>)}
    </ul>
  )
}

export default NewsList
