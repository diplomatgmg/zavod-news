import { type ReactElement, useEffect, useState } from 'react'
import NewsList from './components/News/NewsList'
import { useGetNewsQuery } from './redux/api'
import { useAppDispatch, useSearchParams } from './redux/hooks'
import { setPage } from './redux/searchParamsSlice'
import { type TNewsSummary } from './types/types'

const App = (): ReactElement => {
  const [allNews, setAllNews] = useState<TNewsSummary[]>([])
  const {
    data,
    isFetching
  } = useGetNewsQuery(useSearchParams())
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
    <div>
      <div>
        <h1>News</h1>
        <NewsList news={allNews}/>
      </div>
    </div>
  )
}

export default App
