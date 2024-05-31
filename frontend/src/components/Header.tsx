import React, { type ReactElement } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

const Header = (): ReactElement => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Новостной Сайт</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/news">Новости</Nav.Link>
            <Nav.Link href="/tags">Новости по тегу</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
