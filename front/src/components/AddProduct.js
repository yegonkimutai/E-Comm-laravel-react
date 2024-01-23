import React, { useState } from 'react'
import Header from './Header'

function AddProduct() {
  const[name, setName] = useState('')
  const[file, setFile] = useState('')
  const[price, setPrice] = useState('')
  const[description, setDescription] = useState('')

  const BASE_URL = 'http://localhost:8000/api/addproduct'

  const addProduct = async() => {
    const formData = new FormData();
    formData.append('file', file)
    formData.append('price', price)
    formData.append('name', name)
    formData.append('description', description)

    let result = await fetch(BASE_URL, {
      method: 'POST',
      body: formData
    })
    alert('Data has been saved')
  }

  return (
    <div>
      <Header />
      <h1>Add Products</h1>
      <div className='col-sm-3 offset-sm-3'>
        <br/>
        <input 
          type='text' 
          value={name}
          onChange={e => setName(e.target.value)}
          className='form-control' 
          placeholder='Name'/>
        <br/>
        <input 
          type='file'
          onChange={e => setFile(e.target.files[0])}
          className='form-control' 
          placeholder='File'/>
        <br/>
        <input 
          type='text'
          value={price}
          onChange={e => setPrice(e.target.value)}
          className='form-control' 
          placeholder='Price'/>
        <br/>
        <input 
          type='text'
          value={description}
          onChange={e => setDescription(e.target.value)}
          className='form-control'
          placeholder='Description'/>
        <br/>
        <button onClick={addProduct} className='btn btn-primary'>Add Product</button>
      </div>
    </div>
  )
}

export default AddProduct