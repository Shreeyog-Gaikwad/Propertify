import React from 'react'
import Header from './Components/Header.jsx'
import Hero from './Components/Hero.jsx'
import Companies from './Components/Companies.jsx'
import Residencies from './Components/Residencies.jsx'
import Value from './Components/Value.jsx'
import Contact from './Components/Contact.jsx'
import GetStarted from './Components/GetStarted.jsx'
import Footer from './Components/Footer.jsx'

const App = () => {
  return (
    <div className='relative overflow-x-clip'>
    <div className='bg-black relative'>
      <div className='bg-gray-400 absolute w-56 h-56 blur-3xl rounded-full'/>
      <Header/>
      <Hero/>
    </div>
    <Companies/>
    <Residencies/>
    <Value/>
    <Contact/>
    <GetStarted/>
    <Footer/>
    </div>
  )
}

export default App
