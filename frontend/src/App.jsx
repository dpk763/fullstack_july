import React from 'react'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import Home from './views/Home'
import About from './views/About'
import PageNotFound from './views/PageNotFound'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Details from './views/Details'
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='*' element={<PageNotFound/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/details/:id' element={<Details/>}/>
      </Routes>
    </Router>
  )
}

export default App
