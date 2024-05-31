import React, { type ReactElement, useEffect } from 'react'
import { useGetNewsQuery } from '../../../redux/api'
import { useAppDispatch, useSearchParams } from '../../../redux/hooks'
import { setPage } from '../../../redux/searchParamsSlice'
import NewsList from '../../News/NewsList'
import { Container } from 'react-bootstrap'

const NewsPage = (): ReactElement => {
  const { page } = useSearchParams()
  const { data, isFetching, isLoading } = useGetNewsQuery(useSearchParams()) // Передача параметров явно
  const dispatch = useAppDispatch()

  useEffect(() => {
    const handleScroll = (): void => {
      // Fetch запрос, если пользователь пролистал 80% страницы
      const remainingHeight = document.body.offsetHeight - window.innerHeight - window.scrollY
      const twentyPercentHeight = document.body.offsetHeight * 0.2

      if (remainingHeight <= twentyPercentHeight && !isFetching) {
        dispatch(setPage(page + 1))
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isFetching, dispatch, page])

  if (data === undefined || isLoading) {
    return <h1>Loading...</h1>
  }

  if (data?.results.length === 0) {
    return (
      <h1 className="d-flex justify-content-center mt-5">Новости не найдены</h1>
    )
  }

  return (
    <Container className="mt-4 mb-4">
      <NewsList news={data.results}/>
    </Container>
  )
}

export default NewsPage
