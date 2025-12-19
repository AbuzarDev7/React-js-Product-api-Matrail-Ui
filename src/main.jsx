import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home.jsx'
import Product from './pages/Product.jsx'
import SingleProduct from './pages/SingleProduct.jsx'
import Navbar from './compunents/Navbar.jsx'
import Footer from './compunents/Footer.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
createRoot(document.getElementById('root')).render(
  
 <BrowserRouter>

 <Navbar/>
  
 <Routes>
  <Route index element = {<Home/>}/>
  <Route path='/product' element ={<Product/>}/>
  <Route path='/singleProduct/:id' element ={<SingleProduct />}/>
 </Routes>

   <Footer/>
 </BrowserRouter>

)
