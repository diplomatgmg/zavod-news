import React, { type ReactElement } from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import SearchForm from './components/SearchForm'
import NewsContainer from './containers/NewsContainer'

const App = (): ReactElement => {
  return (
    <div>
      <Header />
      <Container className="mt-5">
        <SearchForm />
        <NewsContainer />
      </Container>
      <Footer />
    </div>
  )
}

export default App
