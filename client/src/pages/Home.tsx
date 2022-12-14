import React from 'react'
import Generate from '../components/cards/Generate'
import Navbar from '../components/navbar/Navbar'
import { DivDivider } from '../styled-components/styles'
import About from '../components/about/About'

const Home = () => {
  return (
    <>
      <div id="home">
        <h1 style={{marginTop: '5rem', marginBottom: '3rem'}}>Tarot Cake</h1>
        <DivDivider style={{backgroundColor: '#fff', height: '1px'}} />
        <div style={{padding: '2rem'}}></div>
        <Generate />
      </div>
      <About />
    </>
  )
}

export default Home