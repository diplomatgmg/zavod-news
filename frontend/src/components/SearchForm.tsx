import React, { type ReactElement } from 'react'
import { Button, Form, InputGroup, Row, Col } from 'react-bootstrap'

const SearchForm = (): ReactElement => {
  return (
    <Form>
      <Row>
        <Col>
          <InputGroup className="mb-4">
            <Form.Control
              placeholder="Поиск по заголовку"
            />
            <Button variant="outline-secondary" id="button-addon2">
              Применить
            </Button>
          </InputGroup>
        </Col>
        <Col>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Поиск по тегам"
            />
            <Button variant="outline-secondary" id="button-addon2">
              Применить
            </Button>
          </InputGroup>
        </Col>
      </Row>
    </Form>
  )
}

export default SearchForm
