import React, { type ReactElement } from 'react'
import { Container } from 'react-bootstrap'
import './style.scss'

const Footer = (): ReactElement => {
  return (
    <footer className="bg-dark">
      <Container className="text-center">
        <p>&copy; {new Date().getFullYear()} Новостной Сайт. Все права защищены.</p>
      </Container>
    </footer>
  )
}

export default Footer
