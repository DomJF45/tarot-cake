import React from 'react'
import '../../styles/Footer.css';
import { DivDivider } from '../../styled-components/styles';

const Footer = () => {
  return (
    <>
      <div className='footer-container'>
        <h3>Tarot Cake</h3>
        <p style={{fontSize: 'smaller'}}> &#169; Dominick Founds 2022</p>
      </div>
    </>
  )
}

export default Footer