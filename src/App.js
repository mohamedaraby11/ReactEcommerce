import logo from './logo.svg';
import './App.css';
import Layout from "../src/components/Layout/Layout"
import Home from "../src/components/Home/Home"
import Cart from "../src/components/Cart/Cart"
import Products from "../src/components/Products/Products"
import Register from "../src/components/Register/Register"
import Login from "../src/components/Login/Login"
import About from "../src/components/About/About"
import ProductDetials from "../src/components/ProductDetails/ProductDetails"
import Categories from "../src/components/Categories/Categories"
import NotFound from "../src/components/NotFound/NotFound"
import { RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import jwtDecode from 'jwt-decode';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
function App() {

  const [userData , setUserData] = useState(null)

  function saveUserDAta(){
    let encodedToken = localStorage.getItem('userToken');
    let decodedTokenn = jwtDecode(encodedToken)
    setUserData(decodedTokenn)

  }

  function handleLogout(){
    // Remove UserToken From Local Storage
    localStorage.removeItem('userToken');

    setUserData(null)

  }

  let routers = createBrowserRouter([
    {path:'', element:<Layout handleLogout={handleLogout} userData={userData}/> , children:[
      {index:true , element:<ProtectedRoute><Home/></ProtectedRoute>},
      {path:'products' , element:<ProtectedRoute><Products/></ProtectedRoute>},
      {path:'cart' , element:<ProtectedRoute><Cart/></ProtectedRoute>},
      {path:'categories' , element:<ProtectedRoute><Categories/></ProtectedRoute>},
      {path:'about' , element:<ProtectedRoute><About/></ProtectedRoute>},
      {path:'productsdetials/:id' , element:<ProtectedRoute><ProductDetials/></ProtectedRoute>},

      {path:'register' , element:<Register/>},
      {path:'login' , element:<Login saveUserDAta ={saveUserDAta}/>},
      {path:'*' , element:<NotFound/>},
    ]}
  ])
  return <RouterProvider router ={routers}></RouterProvider>;
}

export default App;
