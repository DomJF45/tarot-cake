import React from 'react'
import Generate from '../components/cards/Generate'
import Navbar from '../components/navbar/Navbar'
import { DivDivider } from '../styled-components/styles'
import About from '../components/about/About'
import Loading from '../components/util/loaders/Loading'
import { motion } from 'framer-motion';
import frog from '../assets/frog.png';
import star1 from '../assets/star1.png';
import moon1 from '../assets/moon1.png';
import star2 from '../assets/star2.png';
import moon2 from '../assets/moon2.png';
import star3 from '../assets/star3.png';
import star4 from '../assets/star4.png';
import star5 from '../assets/star5.png';
import bigfart from '../assets/bigfart.mp3';

const Home = () => {

  const fart = new Audio(bigfart);

  const bigFart = (): void => {
    fart.currentTime = 0;
    fart.play();
  }

  return (
    <>
      <div id="home">  
        <h1 style={{marginTop: '5rem', marginBottom: '3rem'}}>Tarot Cake</h1>
        <motion.img 
          src={frog}
          whileTap={{
            height: '200px',
            width: '275px'
          }}
          onTap={ bigFart }
          transition={{ type: 'spring', stiffness: 700, damping: 17 }}
          style={{
            width: '225px',
            position: 'absolute',
            bottom: 0,
            left: 0,
            cursor: 'pointer',
            padding: 0,
            zIndex: '22',
            margin: 0,
          }}
        /> 
        <img src={star1} style={{
            width: '150px',
            position: 'absolute',
            top: '200px',
            right: 0
          }} 
        /> 
        <img src={moon1} style={{
            width: '250px',
            position: 'absolute',
            bottom: '100px',
            right: '100px',
          }} 
        />
        <img src={star2} style={{
            width: '250px',
            position: 'absolute',
            top: '100px',
            left: '-40px'
          }}
        />
        <img src={moon2} style={{
          width: '300px',
          position: 'absolute',
          bottom: '10px',
          left: '-20px'
          }}
        />
        <img src={star3} style={{
          width: '200px',
          position: 'absolute',
          bottom: 0,
          right: '-20px'
        }}
        />
        <img src={star4} style={{
          width: '100px',
          position: 'absolute',
          bottom: '40px',
          right: '80px'
        }}
        />
        <img src={star4} style={{
          width: '100px',
          position: 'absolute',
          top: '40px',
          left: '80px'
        }}
        />
        <img src={star4} style={{
          width: '100px',
          position: 'absolute',
          top: '300px',
          left: '-100px'
        }}
        />
        <img src={star5} style={{
          width: '300px',
          position: 'absolute',
          bottom: '260px',
          right: '100px'
        }}
        />
        <DivDivider style={{backgroundColor: '#fff', height: '1px'}} />
        <Generate />
      </div>
      <About />
    </>
  )
}

export default Home
