import React from 'react';
import { motion } from 'framer-motion';
import { duration } from '@mui/material';
import '../../../styles/Loader.css';

const Loading = () => {

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 0,
        left: 0,
        overflowX: 'hidden'
      }}
    >
      <div 
        className='loader'
      />
    </div>
  )
}

export default Loading