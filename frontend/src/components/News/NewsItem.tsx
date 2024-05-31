import { type FC, type ReactElement } from 'react'
import { type TNews, type TNewsSummary } from '../../types/types'

interface NewsItemProps {
  news: TNews | TNewsSummary
}

const NewsItem: FC<NewsItemProps> = ({ news }): ReactElement => {
  const { title, image, tags } = news

  return (
    <li>
      <h3>{title}</h3>
      <img src={image} width={200}></img>
      <p>
        <b>Tags:</b> {tags.map(tag => tag.name).join(', ')}
      </p>
    </li>
  )
}

export default NewsItem
