import React, { useEffect, useState } from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate();
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');

  const BASE_URL = 'http://localhost:8000/api/login'
  
  useEffect(() => {
    if(localStorage.getItem('user-info')) {
      navigate('/add')
    }
  }, [])

  const logIn = async() => {
    let item = {email, password}
    let result = await fetch(BASE_URL, {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        'Content-Type':'application/json',
        'Accept':'application/json'
      }
    })
    result = await result.json()
    localStorage.setItem('user-info', JSON.stringify(result))
    navigate('/add')
  }

  return (
    <div>
      <Header />
      <h1>Login Page</h1>
      <div className='col-sm-6 offset-sm-3'>
        <input 
          className='form-control'
          value={email}
          onChange={e => setEmail(e.target.value)}
          type='text' 
          placeholder='Email' />
        <br />
        <input 
          className='form-control'
          value={password}
          onChange={e => setPassword(e.target.value)}
          type='password' 
          placeholder='Password' />
        <br />
        <button onClick={logIn} className='btn btn-primary'>Login</button>
      </div>
    </div>
  )
}

export default Login