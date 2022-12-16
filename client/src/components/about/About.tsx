import React from 'react'
import { DivDivider, TextContainer } from '../../styled-components/styles'
import '../../styles/About.css'
import Footer from '../footer/Footer'

const About = () => {
  return (
    <>
      <div className='about-container'>
        <div className='content-container' style={{paddingTop: '5rem'}}>
          <h1 style={{color: "#a741eb"}}>A Daily Tarot Card generator to gain introspection for your past, present, and future</h1>
            <TextContainer>
              <h2>What is Tarot Cake?</h2>
              <DivDivider style={{width: '10%', backgroundColor: "#a741eb"}} />
              <p>Tarot Cake is a daily activity where you can view you Tarot Reading. The three cards represent your Past, Present, and Future.</p>
            </TextContainer>
            <TextContainer>
              <h2>How Do I Use It?</h2>
              <DivDivider style={{width: '10%', backgroundColor: "#a741eb"}} />
              <ol>
                <li>Click generate</li>
                <li>Click on a card</li>
                <li>Click on the revealed cards to see more info</li>
              </ol>
            </TextContainer>
            <TextContainer>
              <h2>Do I need an account?</h2>
              <DivDivider style={{width: '10%', backgroundColor: "#a741eb"}} />
              <p>Nope! Registering for an account is only if you want to see your previous cards.</p>
            </TextContainer>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default About