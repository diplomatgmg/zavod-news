import React from 'react'
import { useForm } from 'react-hook-form'
import { Alert, Button, Container, Form, Row } from 'react-bootstrap'
import { useCreateNewsMutation } from '../../redux/api'
import { type TNews } from '../../types/types'

interface TFormData extends Omit<TNews, 'id'> {

}

const NewsForm: React.FC = () => {
  const { register, handleSubmit } = useForm<TFormData>()
  const [createNews, { isSuccess }] = useCreateNewsMutation()

  const onSubmit = async (data: TFormData): Promise<void> => {
    const formData = new FormData()
    formData.append('title', data.title)
    formData.append('content', data.content)
    formData.append('image', data.image[0])
    // @ts-expect-error: Unreachable code error
    await createNews(formData)
  }

  return (
    <Container className="mt-5 d-flex justify-content-center">
      <Row>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              {...register('title', { required: true })}
            />
          </Form.Group>

          <Form.Group controlId="formContent">
            <Form.Label>Content</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter content"
              {...register('content', { required: true })}
            />
          </Form.Group>

          <Form.Group controlId="formImage">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="file"
              {...register('image', { required: true })}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Add News
          </Button>

          {isSuccess && <Alert variant="success">News created successfully.</Alert>}
        </Form>
      </Row>
    </Container>
  )
}

export default NewsForm
