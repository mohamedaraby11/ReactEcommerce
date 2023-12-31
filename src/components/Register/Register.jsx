import React, { useState } from 'react'
import style from './Register.module.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export default function Register() {
  let navigate = useNavigate();
  const [isloading, setisLoading] = useState(false)
  const [messageError , setMessageError] = useState('')

  async function handleRegister(values) {
    setisLoading(true)
    let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, values).catch((err)=>{
      setisLoading(false)
      setMessageError(`${err.response.data.statusMsg} : ${err.response.data.message    }`)

    })
    if (data.message === 'success') {
      setisLoading(false)
      navigate('/login')


    }
    console.log("Register ....");
  }

  let validation = Yup.object({
    name: Yup.string().required('Name is required').min(3, ' Name Min Length iS 3').max(10, 'Name Max length is 10'),
    email: Yup.string().required('Email is required').email('Email is Invalid'),
    password: Yup.string().required('Password is required').matches(/^[A-Z][a-z0-9]{5,10}$/, 'Password Must Start With upperCase and so on'),
    rePassword: Yup.string().required('RePassword is required').oneOf([Yup.ref('password')], ' Password And RePassword Doesnot Match '),
    phone: Yup.string().required('Phone is required').matches(/^01[0125][0-9]{8}$/, 'Phone Must be an Egyptian Number '),
  })



  let formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      rePassword: '',
      phone: '',
    },
    validationSchema: validation,
    onSubmit: handleRegister,
  })
  return <>

    <div className='w-75 mx-auto py-4'>
      <h4> Register Now</h4>
    </div>
    {messageError ?     <div className='alert alert-danger'>{messageError}</div>
 : null}

    <form onSubmit={formik.handleSubmit}>

      <label htmlFor='name'> Name </label>
      <input onBlur={formik.handleBlur} className='form-control mb-2' onChange={formik.handleChange} value={formik.values.name} type='text' name='name' id='name' />
      {formik.errors.name && formik.touched.name ? <div className='alert alert-danger'>{formik.errors.name}</div>
        : null}



      <label htmlFor='email'> Email </label>
      <input onBlur={formik.handleBlur} className='form-control mb-2' onChange={formik.handleChange} value={formik.values.email} type='email' name='email' id='email' />
      {formik.errors.email && formik.touched.email ? <div className='alert alert-danger'>{formik.errors.email}</div>
        : null}



      <label htmlFor='password'> Password </label>
      <input onBlur={formik.handleBlur} className='form-control mb-2' onChange={formik.handleChange} value={formik.values.password} type='password' name='password' id='password' />
      {formik.errors.password && formik.touched.password ? <div className='alert alert-danger'>{formik.errors.password}</div>
        : null}


      <label htmlFor='rePassword'> RePassword </label>
      <input onBlur={formik.handleBlur} className='form-control mb-2' onChange={formik.handleChange} value={formik.values.rePassword} type='password' name='rePassword' id='rePassword' />
      {formik.errors.rePassword && formik.touched.rePassword ? <div className='alert alert-danger'>{formik.errors.rePassword}</div>
        : null}

      <label htmlFor='phone'> Phone </label>
      <input onBlur={formik.handleBlur} className='form-control mb-2' onChange={formik.handleChange} value={formik.values.phone} type='tel' name='phone' id='phone' />
      {formik.errors.phone && formik.touched.phone ? <div className='alert alert-danger'>{formik.errors.phone}</div>
        : null}

      {isloading ? <button type='button' className='btn bg-main text-white'><i className='fas fa-spinner fa-spin'></i> </button>
        : <button disabled={!(formik.isValid && formik.dirty)} onBlur={formik.handleBlur} type='submit' className='btn bg-main text-white'>Register </button>
      }


    </form>
  </>

}
