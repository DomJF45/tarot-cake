import React, { useState } from 'react'
import { Button } from '../../styled-components/styles'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { login } from '../../features/auth/auth.slice';
import { iUser } from '../../interfaces/user/user.interface';

const Login = () => {

  const [userEmail, setUserEmail] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');
  const [showPass, setShowPass] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { loading } = useAppSelector((state) => state.authState);
  const handleSubmit = (e: React.FormEvent) => {

    e.preventDefault();

    const userData: iUser = {
      email: userEmail,
      password: userPassword
    }

    console.log(userData);
    dispatch(login(userData)); 
    if (loading === 'success') {
      navigate('/');
    }

  }

  return (
    <>
      <div className='auth-card'>
        <h1>Log In</h1>
        <div className='form-container'>
          <form id="login-form" className='auth-form' onSubmit={handleSubmit}>
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
        <Button type="submit" form="login-form">Login</Button>
        <div>
          <p>Don't have an account? <Link to='/register'>Sign Up!</Link></p>
        </div>
      </div>
    </>
  )
}

export default Login
