import React from 'react'
import {Helmet} from "react-helmet";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import logo from "../../assets/logo.png"
export default function ContactUs() {
  let formValues = {} ;
  let initialvalues ={
    name                                                                                  : "",
    company                                                                                  : "",
    website                                                                                  : "",
  }
  let validationSchema = Yup.object({
    name                                                                                     : Yup.string().required("Name is required , hint: min 3 charcters, maximum 15 charcters").min(3,"min 3 charcters").max(35,"maximum 35 charcters"),
    company                                                                                     : Yup.string().required("company is required , hint: min 3 charcters, maximum 15 charcters").min(3,"min 3 charcters").max(35,"maximum 35 charcters"),
    website                                                                                     : Yup.string().optional("company is required , hint: min 3 charcters, maximum 15 charcters").min(10,"min 10 charcters").max(35,"maximum 35 charcters"),
  })
  let formik = useFormik({
    enableReinitialize                                                                       : true,
    validateOnChange:false,
    initialValues:{ 
     ...initialvalues
    },
    validationSchema,
    onSubmit                                                                                 : (values)=>
  {
    console.log(values)
  //  setIsValues(values);   
   formValues={...values};

  },
 })
  return (
    <>
        <Helmet>
            <meta charSet                                                                   = "utf-8" />
            <title>Contact Us</title>
        </Helmet>
    <div className='bg-custom-green min-h-screen flex flex-wrap justify-center items-center'>
      <div className="md:w-1/3">
        <img src={logo} alt="IN Marketing logo" />
      </div>
      <div className="md:w-1/2 text-start ">
      <p className='text-custom-cafe mb-3 font-medium'>Contact Us</p>

      <h2 className='text-custom-gold text-4xl md:text-5xl lg:text-5xl font-bold mb-3'>Get In Touch With us</h2>
      <form onSubmit                                                                      = {formik.handleSubmit} onReset={formik.handleReset} {...initialvalues} className='flex flex-wrap justify-start items-center'>
      <div className                                                                            = "form-group mb-1 me-4 w-1/3">
        {/* <label htmlFor                                                                              = "name" className={`fw-semibold text-uppercase `}>Name *</label> */}
        <input type                                                                                 = "text" className={`form-control form-control-sm p-2  rounded-lg`}  id='name' name='name' placeholder='  Name' value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
      </div>
     
      <div className                                                                            = "form-group mb-1 w-1/3">
        {/* <label htmlFor                                                                              = "name" className={`fw-semibold text-uppercase `}>Name *</label> */}
        <input type                                                                                 = "text" className={`form-control form-control-sm p-2  rounded-lg`}  id='company' name='company' placeholder='  Company' value={formik.values.company} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
      </div>
      {formik.errors.name && formik.touched.name?<p className                                   = 'p-2 mb-4 w-1/3 text-sm text-red-800 rounded-lg  dark:text-red-600  me-6  ' role="alert"> {formik.errors.name} </p>:"" }
      {formik.errors.company && formik.touched.company?<div className                                   = 'p-2 mb-4 text-sm text-red-800 rounded-lg  dark:text-red-600 w-1/3' role="alert">{formik.errors.company}</div>:"" }

      <div className                                                                            = "form-group mb-1 w-1/3">
        {/* <label htmlFor                                                                              = "name" className={`fw-semibold text-uppercase `}>Name *</label> */}
        <input type                                                                                 = "text" className={`form-control form-control-sm p-2  rounded-lg`}  id='website' name='website' placeholder='  website or social media link' value={formik.values.website} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
      </div>
     
      <div className                                                                            = "form-group mb-1 w-1/3">
        {/* <label htmlFor                                                                              = "name" className={`fw-semibold text-uppercase `}>Name *</label> */}
        <input type                                                                                 = "text" className={`form-control form-control-sm p-2  rounded-lg`}  id='website' name='website' placeholder='  website or social media link' value={formik.values.website} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
      </div>
      
      </form>
      </div>
      
      </div>
    </>
  )
}
