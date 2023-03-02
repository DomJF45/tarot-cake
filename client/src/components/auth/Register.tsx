import React, { useState } from 'react'
import { Button } from '../../styled-components/styles';
import { Link } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import '../../styles/Auth.css'
import { iUser } from '../../interfaces/user/user.interface';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Register = () => {

  const [userName, setUserName] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');
  const [showPass, setShowPass]: [boolean, (prev:boolean) => void] = useState<boolean>(false);
  
  const handleShowPass = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    setShowPass(!showPass);
  }

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

   const userData = {
      name: userName,
      email: userEmail,
      password: userPassword
    }

    console.log(userData);


  } 

  return (
    <>
      <div className='auth-card'>
        <h1>Register</h1>
        <div className='form-container'>
          <form id='register-form' className='auth-form' onSubmit={handleRegister}>
            <div>
              <input type='text' placeholder='Username' value={userName} onChange={(e) => setUserName(e.currentTarget.value)} />
            </div>
            <div>
              <input type='text' placeholder='Email' value={userEmail} onChange={(e) => setUserEmail(e.currentTarget.value)} />
            </div>
            <div>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%', gap: '10px', width: '100%' }}>
                <input type={showPass ? 'text' : 'password'} placeholder='Password' value={userPassword} onChange={(e) => setUserPassword(e.currentTarget.value)} /> 
              </div>  
              { showPass ? <Visibility style={{cursor: 'pointer'}} onClick={() => setShowPass(!showPass)} fontSize='large' /> : <VisibilityOff style={{cursor: 'pointer'}} onClick={() => setShowPass(!showPass)} fontSize='large' /> }
            </div>
            
            
          </form>
        </div>
        <Button type="submit" form='register-form' >Register</Button>
        <div>
          <p>Already have an account? <Link to='/login'>Login</Link> </p>
        </div>
      </div>
    </>
  )
}

export default Register
