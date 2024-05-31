import { type FC, type ReactElement } from 'react'
import { type TNews, type TNewsSummary } from '../../types/types'

interface NewsItemProps {
  news: TNews | TNewsSummary
}

const NewsItem: FC<NewsItemProps> = ({ news }): ReactElement => {
  const { id, title, image, tags } = news

  return (
    <li key={id}>
      <h3>{title}</h3>
      <img src={image} width={200}></img>
      <p>
        <b>Tags:</b> {tags.map(tag => tag.name).join(', ')}
      </p>
    </li>
  )
}

export default NewsItem
