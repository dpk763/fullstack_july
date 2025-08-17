import React, { useEffect, useState } from 'react'
import NavBar from './components/NavBar'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './views/Home'
import Shop from './views/Shop'
import ProductDetails from './views/ProductDetails'
function App() {

  return (

    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/productDetails/:id' element={<ProductDetails/>}/>
      </Routes>

    </Router>
   
  )
}

export default App
