import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'

function Register() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem('user-info')) {
      navigate('/add')
    }
  }, [])

  const BASE_URL = 'http://localhost:8000/api/register'

  const signUp = async() => {
    let cred = {name, email, password}
    console.log(cred)

    let result = await fetch(BASE_URL, {
      method: 'POST',
      body: JSON.stringify(cred),
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
    <>
    <Header />
    <div className='col-sm-6 offset-sm-3'>
      <h1>Registration Page</h1>
      <input 
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)} 
        className='form-control' 
        placeholder='Name' />
      <br />
      <input 
        type='email'
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        className='form-control' 
        placeholder='Email' />
      <br />
      <input 
        type='password' 
        value={password}
        onChange={(e) => setPassword(e.target.value)} 
        className='form-control' 
        placeholder='Password' />
      <br />
      <button className='btn btn-primary' onClick={signUp}>Sign Up</button>
    </div>
    </>
  )
}

export default Register