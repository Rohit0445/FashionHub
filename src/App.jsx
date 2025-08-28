import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Contact'
import Shop from './Components/Shop'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Products from './Components/Products'
import Cart from './Components/Cart'



const App = () => {
  return (
    <>

      <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}></Route>
        <Route path='/shop' element={<Shop/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/products/:cat' element={<Products/>}></Route>
        {/* <Route path='/services' element={<Services/>}></Route> */}
        <Route path='/cart' element={<Cart/>}></Route>
      </Route>
    </Routes>
    
    
    </>
  )
}

export default App
