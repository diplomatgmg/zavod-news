import React, { type ReactElement } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import SearchForm from './SearchForm'
import routes from '../routes/routes'

const Header = (): ReactElement => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href={routes.home}>Новостной Сайт</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
           <Nav className="ml-auto">
            <Nav.Link href={routes.news}>Новости</Nav.Link>
           </Nav>
        </Navbar.Collapse>
        <SearchForm />
      </Container>
    </Navbar>
  )
}

export default Header
