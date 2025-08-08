import React from 'react'
// import Form from './components/Form'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './views/Home'
import About from './views/About'
import Navbar from './components/Navbar'
import PageNotFound from './views/PageNotFound'

function App() {
  return (
    <Router>
        <Navbar/>
        <Routes>
            <Route path='*' element={<PageNotFound/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
        </Routes>
    </Router>
  )
}

export default App
