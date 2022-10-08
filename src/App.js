import React from 'react'
import Analytics from './components/Analytics'
import Cards from './components/Cards'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Newsletter from './components/Newsletter'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
    </>
  )
}

export default App
