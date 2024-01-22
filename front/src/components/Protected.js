import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Protected({ Cmp }) {
    const cmpInstance = <Cmp />
    const navigate = useNavigate();
  
  useEffect(() => {
    if(!localStorage.getItem('user-info')) {
      navigate('/register')
    }
  }, [])
  return (
    <div>
        {cmpInstance}
    </div>
  )
}

export default Protected