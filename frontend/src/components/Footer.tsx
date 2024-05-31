import React, { type ReactElement } from 'react'
import { Container } from 'react-bootstrap'

const Footer = (): ReactElement => {
  return (
    <footer className="mt-5">
      <Container className="text-center">
        <p>&copy; {new Date().getFullYear()} Новостной Сайт. Все права защищены.</p>
      </Container>
    </footer>
  )
}

export default Footer
