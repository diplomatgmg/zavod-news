import React, { type FC, useState } from 'react'
import { Card, Button, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import routes from '../../../routes/routes'
import { useDeleteNewsMutation } from '../../../redux/api'
import './style.scss'
import { type TNews, type TNewsSummary } from '../../../types/types'
import ConfirmationPopup from '../../ConfirmationPopup'

interface NewsItemProps {
  news: TNews | TNewsSummary
}

const NewsItem: FC<NewsItemProps> = ({ news }) => {
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [deleteNews] = useDeleteNewsMutation()
  const { id, title, image, tags } = news
  const navigate = useNavigate()

  const handleNewsClick = (): void => {
    navigate(routes.newsDetail(id))
  }

  const handleDeleteClick = async (): Promise<void> => {
    await deleteNews(id)
    window.location.reload()
  }

  const handleConfirmationCancel = (): void => {
    setShowConfirmation(false)
  }

  return (
    <>
      <Card className="news-card" style={{ width: '22rem', height: '100%' }}>
        <Card.Img variant="top" src={image} alt={title} onClick={handleNewsClick} />
        <Card.Body className="d-flex flex-column justify-content-between pb-0">
          <Card.Title onClick={handleNewsClick}>{title}</Card.Title>
          <Card.Text className="small mt-3" onClick={handleNewsClick}>
            <b>Tags:</b> {tags.map((tag) => tag.name).join(', ')}
            <br />
            <b>id: {id}</b>
          </Card.Text>
          <Col xs={12}>
            <Button variant="danger" onClick={() => setShowConfirmation(true)} size="sm">
              Delete
            </Button>
          </Col>
        </Card.Body>
      </Card>
      {showConfirmation && (
        <ConfirmationPopup
          onConfirm={handleDeleteClick}
          onCancel={handleConfirmationCancel}
        />
      )}
    </>
  )
}

export default NewsItem
