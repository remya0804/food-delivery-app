
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Footer from './Components/Footer/Footer'
import { useState } from 'react'
import Login from './Components/Login/Login'

function App() {

  const [login,setLogin] = useState(false)
 

  return (

    <>
    
    
      <div className="app">

      {login ? <Login setLogin={setLogin} /> : <></>}

        <Navbar setLogin={setLogin}/>

        <Routes>

          <Route path='/food-delivery-app'  element={<Home />} />
          <Route path='/food-delivery-app/cart'  element={<Cart />} />
          <Route path='/food-delivery-app/order'  element={<PlaceOrder />} />


        </Routes>
      
      </div>

      <Footer />

      

    </>
  )
}

export default App
