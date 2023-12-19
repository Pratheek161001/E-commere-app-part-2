import React from 'react'
import { CartProvider } from './CartContext'
import Navbartop from './Navbar'
import Applogo from './Applogo'
import MainBody from './MainBody'

function Shop() {
  return (
    <CartProvider>
        <Navbartop/>
        <Applogo/>
        <MainBody/>
        <Applogo/>
    </CartProvider>
  )
}

export default Shop