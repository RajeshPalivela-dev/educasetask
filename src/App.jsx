import React from 'react'
import Home from './components/Home'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Profile from './components/Profile'

const App = () => {
  return (
  <div>
     <BrowserRouter>
     <Routes>
             <Route path='/'  element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path='/signup'element={<Signup/>}/>
            <Route path="/profile" element={<Profile/>}/>
     </Routes>
       
     </BrowserRouter>
  </div>
  )
}

export default App