import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios';


function Create() {
  const [values,setValues]=useState({
    name: '',
    category: '',
    price: ''
})


const navigate = useNavigate();

const handleSubmit = (event)=>{
  event.preventDefault();
  if(values.name && values.category && values.price){
    axios.post('http://localhost:3000/create/',values)
    .then(res => {
    console.log(res);
    navigate('/')
    alert("Submitted")
    
  })
  .catch(err => console.log(err));
  }else{
    alert("Enter valid input")
  }
  
}
  return (
    <>
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center ' style={{background: "#124E66"}}>
      <div className=' border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h4 className='text-secondary d-flex justify-content-center align-items-center h4'>Add New products</h4>
        <form action="" onSubmit={handleSubmit}>
          <div className='mb-2'>
            <label htmlFor="name">Name :</label>
            <input type="text" name='name' className='form-control' placeholder='Enter Name'
            onChange={e=>setValues({...values,name:e.target.value})}/>

          </div>
          <div className='mb-2'>
            <label htmlFor="category">Category</label>
            <input type="text" name='category' className='form-control' placeholder='Enter category'
            onChange={e=>setValues({...values,category:e.target.value})}/>

          </div>
          <div className='mb-2'>
            <label htmlFor="name">price :</label>
            <input type="number" name='price' className='form-control' placeholder='Enter price'
            onChange={e=>setValues({...values,price:e.target.value})}/>

          </div>
          <div className='mb-3 mt-4 d-flex justify-content-between'>
            <Link to="/" className='btn btn-primary ' >Back</Link>
            <button className='btn btn-success ms-5 '>Submit</button>
          </div>
          
          
        </form>
      </div>
    </div>
    </>
  )
}

export default Create