import React, { useState } from 'react'
import style from './Login.module.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export default function Login({saveUserDAta}) {

  let navigate = useNavigate();
  const [isloading, setisLoading] = useState(false)
  const [messageError , setMessageError] = useState('')

  async function handleLogin(values) {
    setisLoading(true)
    let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, values).catch((err)=>{
      setisLoading(false)
      setMessageError(`${err.response.data.statusMsg} : ${err.response.data.message    }`)

    })
    if (data.message === 'success') {
      localStorage.setItem('userToken',data.token )
      saveUserDAta()
      setisLoading(false)
      navigate('/')


    }
    console.log("login ....");
  }

  let validation = Yup.object({
    email: Yup.string().required('Email is required').email('Email is Invalid'),
    password: Yup.string().required('Password is required').matches(/^[A-Z][a-z0-9]{5,10}$/, 'Password Must Start With upperCase and so on'),
  })



  let formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validation,
    onSubmit: handleLogin,
  })
  return <>

    <div className='w-75 mx-auto py-4'>
      <h4> Login Now</h4>
    </div>
    {messageError ?     <div className='alert alert-danger'>{messageError}</div>
 : null}

    <form onSubmit={formik.handleSubmit}>

 



      <label htmlFor='email'> Email </label>
      <input onBlur={formik.handleBlur} className='form-control mb-2' onChange={formik.handleChange} value={formik.values.email} type='email' name='email' id='email' />
      {formik.errors.email && formik.touched.email ? <div className='alert alert-danger'>{formik.errors.email}</div>
        : null}



      <label htmlFor='password'> Password </label>
      <input onBlur={formik.handleBlur} className='form-control mb-2' onChange={formik.handleChange} value={formik.values.password} type='password' name='password' id='password' />
      {formik.errors.password && formik.touched.password ? <div className='alert alert-danger'>{formik.errors.password}</div>
        : null}


     

      {isloading ? <button type='button' className='btn bg-main text-white'><i className='fas fa-spinner fa-spin'></i> </button>
        : <button disabled={!(formik.isValid && formik.dirty)} onBlur={formik.handleBlur} type='submit' className='btn bg-main text-white'>Login </button>
      }


    </form>
  </>

}
