import React,{useEffect, useState} from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
   
function Home() {

  const [data, setData]=useState([])
  const navigate = useNavigate();

  useEffect(()=>{
    axios.get('http://localhost:3000/create/')
    .then(res => setData(res.data))
    .catch(err => console.log(err));
  },[])  

  const handleDelete=(id)=>{
    const confirm = window.confirm("would you like to Delete?");
    if(confirm){
      axios.delete('http://localhost:3000/create/'+id)
      .then (res =>{
        location.reload();
      }).catch(err => console.log(err))
    }
  }

  return (
    <>
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100' >
      <h2 className='d-flex justify-content-center'>Products</h2>
      <div className='w-75 rounded bg-white border shadow p-4'>
        <div className='d-flex justify-content-end'>
          <Link to={'/create'} className='btn btn-succcess'>Add +</Link>
          </div>
        <table className='table table-striped'>
          <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>CATEGORY</th>
            <th>PRICE</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
            {
              data.map((d,i)=>(
                <tr key={i}>
                  <td>{d.id}</td>
                  <td>{d.name}</td>
                  <td>{d.category}</td>
                  <td>{d.price}</td>
                  <td>
                    <Link to={'/update/:id'} className='btn btn-primary'>Edit</Link>

                    <button className='btn btn-sm btn-danger'onClick={e=>handleDelete(d.id)} >delete</button>
                  </td>
                </tr>
              ))
            } 
          </tbody>
          </table>
          </div>    
    </div>
    </>
  )
}

export default Home