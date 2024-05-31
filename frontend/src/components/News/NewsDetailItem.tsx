import React, { type FC, type ReactElement } from 'react'
import { Card } from 'react-bootstrap'
import { type TNews } from '../../types/types'

interface NewsDetailItemProps {
  news: TNews
}

const NewsDetailItem: FC<NewsDetailItemProps> = ({ news }): ReactElement => {
  const { title, content, image, tags } = news

  return (
    <Card className="p-5">
      <Card.Img variant="top" src={image} alt={title} />
      <Card.Body className="d-flex flex-column justify-content-between pb-0">
        <Card.Title style={{ fontSize: '2rem' }}>{title}</Card.Title>
        <Card.Text className="mt-3">{content}</Card.Text>
        <Card.Text className="small mt-3">
          <b>Tags:</b> {tags.map(tag => tag.name).join(', ')}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default NewsDetailItem
