import { useState } from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import View from './Pages/View'
import Update from './Pages/Update'
import Create from './Pages/Create'
import Landing from './Pages/Landing'
import Header from './Component/Header'
function App(){

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/view/:id' element={<View/>}/>
        <Route path='/update/:id' element={<Update/>}/>
        <Route path='/create' element={<Create/>}/>
      </Routes>
    </>
  )
}

export default App