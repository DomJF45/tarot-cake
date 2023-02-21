import React, { useState } from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom';
import '../../styles/Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { display } from '@mui/system';

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
        <div className='btn-background' style={show ? {backgroundColor: 'transparent'} : {backgroundColor: "#fff"}} onClick={(): void => setShow(!show)}>
          { show ? <CloseIcon /> : <MenuIcon />}
        </div>
        
        <div id='my-sidebar' className='sidebar' style={show ? {opacity: 1, width: '200px', height: '300px'} : {opacity: 0, width: 0, height: 0}}>
          <a onClick={(): void => handleNavigate('/login')}>Login</a>
          <a>Settings</a>
          <a onClick={(): void => handleNavigate('/history')}>History</a>
          <a onClick={(): void => handleNavigate('/')}>Home</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar