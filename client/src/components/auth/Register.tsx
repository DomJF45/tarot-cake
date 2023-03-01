import React, { useState } from 'react'
import { Button } from '../../styled-components/styles';
import { Link } from 'react-router-dom';
import '../../styles/Auth.css'
import { iUser } from '../../interfaces/user/user.interface';

const Register = () => {

  const [userName, setUserName] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');
  const [userData, setUserData] = useState<iUser | null>(null);
  const [showPass, setShowPass]: [boolean, (prev:boolean) => void] = useState<boolean>(false);
  
  const handleShowPass = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    setShowPass(!showPass);
  }

  return (
    <>
      <div className='auth-card'>
        <h1>Register</h1>
        <div className='form-container'>
          <form className='auth-form'>
            <div>
              <input type='text' placeholder='Username' value={userData!.name} onChange={(e) => setUserName(e.currentTarget.value)} />
            </div>
            <div>
              <input type='text' placeholder='Email' value={userData!.name} onClick={(e) => setUserEmail(e.currentTarget.value)} />
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <input type={showPass ? 'text' : 'password'} placeholder='Password' />
              {/* <button onClick={(e): void => handleShowPass(e)}>Show Password?</button> */}
            </div>
          </form>
        </div>
        <Button>Register</Button>
        <div>
          <p>Already have an account? <Link to='/login'>Login</Link> </p>
        </div>
      </div>
    </>
  )
}

export default Register
