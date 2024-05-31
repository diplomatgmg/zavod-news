import React, { type FC } from 'react'
import { Row, Col } from 'react-bootstrap'
import NewsItem from './NewsItem/NewsItem'
import { type TNews, type TNewsSummary } from '../../types/types'

interface NewsListProps {
  news: TNews[] | TNewsSummary[]
}

const NewsList: FC<NewsListProps> = ({ news }) => {
  return (
    <Row xs={1} md={3} className="g-4">
      {news.map((item, index) => (
        <Col key={`${item.id}-${index}`}>
          <NewsItem news={item} />
        </Col>
      ))}
    </Row>
  )
}

export default NewsList
