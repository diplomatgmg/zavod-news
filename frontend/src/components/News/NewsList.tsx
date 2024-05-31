import { type FC, type ReactElement } from 'react'
import NewsItem from './NewsItem'
import { type TNews, type TNewsSummary } from '../../types/types'

interface NewsListProps {
  news: TNews[] | TNewsSummary[]
}

const NewsList: FC<NewsListProps> = ({ news }): ReactElement => {
  return (
    <ul>
      {news.map((item, index) => <NewsItem news={item} key={`${item.id}-${index}`}/>)}
    </ul>
  )
}

export default NewsList
