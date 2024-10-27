import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
   <>
       <div className='vh-100' style={{background:"black"}}>
    <div className='container row'>
    <div className='col-sm-6 col-12 p-5'>
        <img className='me-5' src="https://cdn.dribbble.com/users/2523232/screenshots/11123813/media/eb15eccf24c29b1a37a844dffd66aa05.png" width='100%' height='100%' alt="" />
    </div>
    <div className=' mt-5 col-12 col-sm-6 align-items-center justify-content-center d-flex'>
        <div className='d-flex justify-content-center align-items-center flex-column mt-5'>
        <Link to='/home' className='btn btn-light  mt-5 px-5'>View </Link>
        </div>
    </div>
    
    </div>
    
         
    </div>

   </>
  )
}

export default Landing