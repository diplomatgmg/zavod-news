import React, { type ReactElement, useEffect, useState } from 'react'
import { useGetNewsQuery } from '../../../redux/api'
import { useAppDispatch, useSearchParams } from '../../../redux/hooks'
import { setPage } from '../../../redux/searchParamsSlice'
import { type TNewsSummary } from '../../../types/types'
import NewsList from '../../News/NewsList'
import { Alert, Container } from 'react-bootstrap'

const NewsPage = (): ReactElement => {
  const [allNews, setAllNews] = useState<TNewsSummary[]>([])
  const { data, isFetching } = useGetNewsQuery(useSearchParams())
  const dispatch = useAppDispatch()
  const { page, tag } = useSearchParams()

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isFetching])

  useEffect(() => {
    if (data !== undefined) {
      setAllNews(prevNews => [...prevNews, ...data.results])
    }
  }, [data])

  useEffect(() => {
    if (tag !== '' && data !== undefined) {
      setAllNews([...data.results])
    }
  }, [tag])

  const handleScroll = (): void => {
    // Fetch запрос, если пользователь пролистал 80% страницы
    const remainingHeight = document.body.offsetHeight - window.innerHeight - window.scrollY
    const twentyPercentHeight = document.body.offsetHeight * 0.2

    if (remainingHeight <= twentyPercentHeight && !isFetching) {
      dispatch(setPage(page + 1))
    }
  }

  if (data?.results.length === 0) {
    return (
      <h1 className="d-flex justify-content-center mt-5">Новости не найдены</h1>
    )
  }

  return (
    <Container className="mt-4 mb-4">
      <NewsList news={allNews} />
    </Container>
  )
}

export default NewsPage
