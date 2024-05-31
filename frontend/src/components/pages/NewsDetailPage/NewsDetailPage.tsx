import { type ReactElement } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetNewsByIdQuery } from '../../../redux/api'
import NotFoundPage from '../ErrorPages/NotFoundPage/NotFoundPage'
import NewsDetailItem from '../../News/NewsDetailItem'

const NewsDetailPage = (): ReactElement => {
  const { newsId } = useParams()
  const navigate = useNavigate()

  const {
    data,
    isLoading
  } = useGetNewsByIdQuery(newsId)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (data === undefined) {
    return <NotFoundPage/>
  }

  return <NewsDetailItem news={data}/>
}

export default NewsDetailPage
