import logo from './logo.svg';
import './App.css';
import Layout from "../src/components/Layout/Layout"
import Home from "../src/components/Home/Home"
import Cart from "../src/components/Cart/Cart"
import Products from "../src/components/Products/Products"
import Register from "../src/components/Register/Register"
import Login from "../src/components/Login/Login"
import About from "../src/components/About/About"
import Categories from "../src/components/Categories/Categories"
import NotFound from "../src/components/NotFound/NotFound"
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
function App() {

  let routers = createBrowserRouter([
    {path:'', element:<Layout/> , children:[
      {index:true , element:<Home/>},
      {path:'products' , element:<Products/>},
      {path:'cart' , element:<Cart/>},
      {path:'categories' , element:<Categories/>},
      {path:'products' , element:<Products/>},
      {path:'about' , element:<About/>},

      {path:'register' , element:<Register/>},
      {path:'login' , element:<Login/>},
      {path:'*' , element:<NotFound/>},
    ]}
  ])
  return <RouterProvider router ={routers}></RouterProvider>;
}

export default App;
