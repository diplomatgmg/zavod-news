import React, { type FC, type ReactElement } from 'react'
import Header from './components/Header'
import Footer from './components/Footer/Footer'

interface AppProps {
  children: React.ReactNode
}

const App: FC<AppProps> = ({ children }): ReactElement => {
  return (
    <>
      <Header/>
      <div className="app">
        {children}
      </div>
      <Footer/>
    </>
  )
}

export default App
