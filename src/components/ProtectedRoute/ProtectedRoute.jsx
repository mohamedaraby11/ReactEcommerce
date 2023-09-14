import React from 'react'
import style from './ProtectedRoute.module.css'
import Home from '../Home/Home'
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute(props) {

  if (localStorage.getItem('userToken')==null){

    return <Navigate  to={'/login'}/>
  }
  else{
    return props.children

  }

}
