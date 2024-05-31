import React, { type ReactElement } from 'react'
import { Button, Form, InputGroup, Row, Col } from 'react-bootstrap'

const SearchForm = (): ReactElement => {
  return (
    <Form>
      <Row className="justify-content-center">
        <Col xs={5}>
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
