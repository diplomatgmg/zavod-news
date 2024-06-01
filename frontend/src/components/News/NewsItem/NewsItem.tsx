import React, { type FC, useState } from 'react'
import { Card, Button, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import routes from '../../../routes/routes'
import './style.scss'
import { type TNews, type TNewsSummary } from '../../../types/types'
import ConfirmationPopup from '../../ConfirmationPopup'
import { useDeleteNewsMutation, useDislikeNewsMutation, useLikeNewsMutation } from '../../../redux/api'

interface NewsItemProps {
  news: TNews | TNewsSummary
}

const NewsItem: FC<NewsItemProps> = ({ news: { id, title, image, tags, likes, dislikes } }) => {
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [deleteNews] = useDeleteNewsMutation()
  const [likeNews] = useLikeNewsMutation()
  const [dislikeNews] = useDislikeNewsMutation()
  const [likesCount, setLikesCount] = useState(likes)
  const [dislikesCount, setDislikesCount] = useState(dislikes)

  const navigate = useNavigate()

  const handleNewsClick = (): void => {
    navigate(routes.newsDetail(id))
  }

  const handleDeleteClick = async (): Promise<void> => {
    await deleteNews(id)
    window.location.reload()
  }

  const handleLikeClick = async (): Promise<void> => {
    await likeNews(id)
    setLikesCount(likesCount + 1)
  }

  const handleDislikeClick = async (): Promise<void> => {
    await dislikeNews(id)
    setDislikesCount(dislikesCount + 1)
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
            <b>id: {id}</b> | likes: {likesCount} | dislikes: {dislikesCount}
          </Card.Text>
          <Col xs={12}>
            <Button variant="outline-success" onClick={handleLikeClick} size="sm" className="me-2">
              Like
            </Button>
            <Button variant="outline-danger" onClick={handleDislikeClick} size="sm">
              Dislike
            </Button>
            <Button variant="danger" onClick={() => setShowConfirmation(true)} size="sm" style={{ float: 'inline-end' }}>
              Удалить
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
