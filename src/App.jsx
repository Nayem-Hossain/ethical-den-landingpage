import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Expertness from './components/Expertness'
import Services from './components/Services'
import Work from './components/Work'
import Clients from './components/Clients'
import Teams from './components/Teams'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Hero />
      <Expertness />
      <Services />
      <Work />
      <Clients />
      <Teams />
      <Footer/>
    </>
  )
}

export default App
