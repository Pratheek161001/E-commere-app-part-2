import React from 'react';
import Navbartop from './components/Navbar';
import Applogo from './components/Applogo';
import MainBody from './components/MainBody';
import {CartProvider} from './components/CartContext'
import { Route} from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';

function App() {
  return (<>
    {/* <CartProvider>
    <Navbartop/>
    <Applogo/>
    <MainBody/>
    <Applogo/>
    </CartProvider> */}
    {/* <About/> */}
    <Home></Home>
  </>
  )
}
export default App;
