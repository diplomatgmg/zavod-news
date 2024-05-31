import React, { type ReactElement, useEffect, useState } from 'react'
import { useGetNewsQuery } from '../../../redux/api'
import { useAppDispatch, useSearchParams } from '../../../redux/hooks'
import { setPage } from '../../../redux/searchParamsSlice'
import { type TNewsSummary } from '../../../types/types'
import NewsList from '../../News/NewsList'
import { Container } from 'react-bootstrap'
import SearchForm from '../../SearchForm'

const NewsPage = (): ReactElement => {
  const [allNews, setAllNews] = useState<TNewsSummary[]>([])
  const { data, isFetching } = useGetNewsQuery(useSearchParams())
  const dispatch = useAppDispatch()
  const { page } = useSearchParams()

  const handleScroll = (): void => {
    // Fetch запрос, если пользователь пролистал 80% страницы
    const remainingHeight = document.body.offsetHeight - window.innerHeight - window.scrollY
    const twentyPercentHeight = document.body.offsetHeight * 0.2

    if (remainingHeight <= twentyPercentHeight && !isFetching) {
      dispatch(setPage(page + 1))
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isFetching])

  useEffect(() => {
    if (data !== undefined) {
      setAllNews(prevNews => [...prevNews, ...data.results])
    }
  }, [data])

  return (
    <Container className="mt-4">
      <SearchForm />
      <NewsList news={allNews} />
    </Container>
  )
}

export default NewsPage
