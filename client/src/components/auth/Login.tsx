import React from 'react'
import { Button } from '../../styled-components/styles'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
      <div className='auth-card'>
        <h1>Log In</h1>
        <div className='form-container'>
          <form className='auth-form'>
            <div>
              <input type='text' placeholder='Email' />
            </div>
            <div>
              <input type='password' placeholder='Password' />
            </div>
          </form>
          <div>
            <Button>Login</Button>
          </div>
          <div>
            <p>Don't have an account? <Link to='/register'>Sign Up!</Link></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login