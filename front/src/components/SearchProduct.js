import React, { useState } from 'react'
import Header from './Header'
import { Table } from 'react-bootstrap'

function SearchProduct() {
  const[data, setData] = useState([])

  const search = async (key) => {
    // Check if the key is blank or contains only whitespace
    if (key.trim() === '') {
      return;
    }
  
    try {
      let result = await fetch('http://localhost:8000/api/search/' + key);
  
      if (result.status === 404) {
        // Handle 404 response, for example:
        console.error('Resource not found');
        return;
      }
  
      const responseText = await result.text();
  
      try {
        const jsonData = JSON.parse(responseText);
        setData(jsonData);
      } catch (jsonError) {
        console.error('Error parsing JSON:', jsonError);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  

  return (
    <>
      <Header />
      <div className='col-sm-6 offset-sm-3'>
        <h1>Search Product</h1>
        <br/>
        <input 
        type='text'
        onChange={e => search(e.target.value)}
        className='form-control' 
        placeholder='Search'
        />
       <Table striped bordered hover>
            <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Price</td>
                <td>Description</td>
                <td>Image</td>
            </tr>
            {
                data.map((item) => 
                <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.description}</td>
                    <td><img style={{width:120}} src={'http://localhost:8000/' + item.file_path} alt=''/></td>
                </tr>
                )
            }
        </Table>
      </div>
    </>
  )
}

export default SearchProduct