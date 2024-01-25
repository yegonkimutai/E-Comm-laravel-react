import React, { useEffect, useState } from 'react'
import Header from './Header'
import { withRouter, useParams } from 'react-router-dom'

function Update() {
  const [data, setData] = useState([])
  const { id } = useParams();

  useEffect(() => {
    singleProduct()
  }, [])

  async function singleProduct() {
    try {
    let result = await fetch(`http://localhost:8000/api/product/${id}`)
    result = await result.json()
    setData(result)
    } catch (error) {
    console.error('Error fetching data:', error);
    }
  }

  return (
    <div>
      <Header />
      <h1>Update Product</h1>
      <input type='text' defaultValue={data.name}/>
      <br/>
      <br/>
      <input type='text' defaultValue={data.price}/>
      <br/>
      <br/>
      <input type='text' defaultValue={data.description}/>
      <br/>
      <br/>
      <input type='file' defaultValue={data.file_path}/>
      <img style={{width:120}} src={'http://localhost:8000/' + data.file_path} alt=''/>
      <br/>
      <br/>
      <button>Update Product</button>
    </div>
  )
}

export default Update