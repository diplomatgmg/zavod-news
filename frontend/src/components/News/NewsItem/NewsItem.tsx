import React, { type FC } from 'react'
import { Card } from 'react-bootstrap'
import { type TNews, type TNewsSummary } from '../../../types/types'
import './style.scss'
import { useNavigate } from 'react-router-dom'
import routes from '../../../routes/routes'

interface NewsItemProps {
  news: TNews | TNewsSummary
}

const NewsItem: FC<NewsItemProps> = ({ news }) => {
  const { id, title, image, tags } = news
  const navigate = useNavigate()

  const handleNewsClick = (): void => {
    navigate(routes.newsDetail(id))
  }

  return (
    <Card className="news-card" style={{ width: '22rem', height: '100%' }} onClick={handleNewsClick}>
      <Card.Img variant="top" src={image} alt={title} />
      <Card.Body className="d-flex flex-column justify-content-between pb-0">
        <Card.Title>{title}</Card.Title>
        <Card.Text className="small mt-3">
          <b>Tags:</b> {tags.map(tag => tag.name).join(', ')}
          <br/>
          <b>id: {id}</b>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default NewsItem
