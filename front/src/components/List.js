import React, { useEffect, useState } from 'react'
import Header from './Header'
import { Table } from 'react-bootstrap'

function List() {
    const[data, setData] = useState([])

    const BASE_URL = 'http://localhost:8000/api/list'

    useEffect(() => {
        async function fetchData() {
            try {
              let result = await fetch(BASE_URL);
              let res = await result.json();
              setData(res);
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          }
        
          fetchData();
    }, [])

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
            </tr>
            {
                data.map((item) => 
                <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.description}</td>
                    <td><img style={{width:120}} src={'http://localhost:8000/' + item.file_path}/></td>
                </tr>
                )
            }
        </Table>
        </div>
    </div>
  )
}

export default List