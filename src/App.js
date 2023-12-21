import React from 'react';
import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Shop from './components/Shop';
import Login from './components/Login';

const router=createBrowserRouter([
  {path:'/about',element:<About/>},
  {path:'/home',element:<Home/>},
  {path:'/',element:<Shop/>},
  {path:'/login',element:<Login/>}
])

function App() {
  return (<>
  <RouterProvider router={router}/> 
  </>
  )
}
export default App;
