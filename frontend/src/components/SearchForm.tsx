import { useState, type ReactElement, type ChangeEvent, type FormEvent } from 'react'
import { Button, Form, InputGroup, Row, Col, Alert } from 'react-bootstrap'
import { useAppDispatch } from '../redux/hooks'
import { setSearch } from '../redux/searchParamsSlice'
import { useNavigate } from 'react-router-dom'
import routes from '../routes/routes'

const SearchForm = (): ReactElement => {
  const [tag, setTag] = useState('')
  const [error, setError] = useState<string | null>(null)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTag(event.target.value)
    if (event.target.value) {
      setError(null)
    }
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    if (tag.trim() === '') {
      setError('Поле не может быть пустым')
      return
    }
    dispatch(setSearch(tag))
    navigate(routes.newsTag(tag))
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <InputGroup>
          <Form.Control
            placeholder="Поиск по тегам"
            value={tag}
            onChange={handleChange}
          />
          <Button variant="outline-secondary" type="submit" id="button-addon2" disabled={tag.trim() === ''}>
            Применить
          </Button>
        </InputGroup>
      </Row>
    </Form>
  )
}

export default SearchForm
