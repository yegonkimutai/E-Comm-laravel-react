import React, { useEffect, useState } from 'react'
import Header from './Header'
import { Table, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function List() {
    const[data, setData] = useState([])

    const BASE_URL = 'http://localhost:8000/api/list'

    async function fetchData() {
      try {
        let result = await fetch(BASE_URL);
        let res = await result.json();
        setData(res);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    useEffect(() => {
          fetchData();
    }, [])

    const deleteProduct = async(id) => {
      let result = await fetch('http://localhost:8000/api/delete/' + id, {
        method: 'DELETE'
      })

      result = await result.json();
      console.log(result)
      fetchData()
    }

  return (  
    <div>
        <Header />
        <h1>Product List</h1>
        <div className='col-sm-8 offset-sm-2'>
        <Table striped bordered hover>
            <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Price</td>
                <td>Description</td>
                <td>Image</td>
                <td>Operations</td>
            </tr>
            {
                data.map((item) => 
                <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.description}</td>
                    <td><img style={{width:120}} src={'http://localhost:8000/' + item.file_path} alt=''/></td>
                    <td>
                    <Button onClick={() => deleteProduct(item.id)} variant="outline-danger">Delete</Button>
                    </td>
                    <td>
                    <Link to={'update/'}>
                    <Button variant="outline-info">Update</Button>
                    </Link>
                    </td>
                </tr>
                )
            }
        </Table>
        </div>
    </div>
  )
}

export default List