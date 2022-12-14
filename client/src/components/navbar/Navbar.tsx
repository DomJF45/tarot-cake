import React, { useState } from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom';
import '../../styles/Navbar.css';

const Navbar = () => {

  const [show, setShow]: [boolean, (prev: boolean) => void] = useState<boolean>(false);
  const navigate: NavigateFunction = useNavigate();

  const handleNavigate = (route: string): void => {
    navigate(route);
    setShow(false);
  }

  return (
    <div className='top-container'>
      <div className='dynamic-sidebar'>
        <button onClick={():void => setShow(!show)} id='open' style={show ? {display: 'none'}:{display: 'block'}}>&#9776;</button>
        <button onClick={():void => setShow(!show)} id='close' style={show ? {display: 'block'}:{display: 'none'}}>&times;</button>
        <div id='my-sidebar' className='sidebar' style={show ? {width: '250px'} : {width: 0}}>
          <a onClick={(): void => handleNavigate('/login')}>Login</a>
          <a>Settings</a>
          <a>History</a>
          <a onClick={(): void => handleNavigate('/')}>Home</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar