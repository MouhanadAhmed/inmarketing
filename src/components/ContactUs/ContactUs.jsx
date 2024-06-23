import React, { useState } from 'react'
import {Helmet} from "react-helmet";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import logo from "../../assets/logo.png"
import { FaceSmileIcon } from '@heroicons/react/24/outline';
export default function ContactUs() {

  const [SubmitFormLoading,SetSubmitFormLoading]= useState(false);


  let formValues = {} ;
  let initialvalues ={
    name                                                                                  : "",
    company                                                                                  : "",
    website                                                                                  : "",
    phone                                                                                  : "",
    email                                                                                  : "",
    subject                                                                                  : "",
    message                                                                                  : "",
    adminMail:"in.mktg.ag@gmail.com"
  }
  let validationSchema = Yup.object({
    name                                                                                     : Yup.string().required("Name is required , hint: min 3 charcters, maximum 15 charcters").min(3,"min 3 charcters").max(35,"maximum 35 charcters"),
    company                                                                                     : Yup.string().required("company is required , hint: min 3 charcters, maximum 15 charcters").min(3,"min 3 charcters").max(35,"maximum 35 charcters"),
    // website                                                                                     : Yup.string().optional("company is required , hint: min 3 charcters, maximum 15 charcters").min(10,"min 10 charcters").max(35,"maximum 35 charcters"),
    phone                                                                                     : Yup.string().required("phone is required").min(10,"min 10 charcters").max(35,"maximum 35 charcters"),
    // email                                                                                     : Yup.string().optional("email is required , hint: min 3 charcters, maximum 15 charcters").min(10,"min 10 charcters").max(35,"maximum 35 charcters"),
    // subject                                                                                     : Yup.string().optional("subject is required , hint: min 3 charcters, maximum 15 charcters").min(10,"min 10 charcters").max(35,"maximum 35 charcters"),
    // message                                                                                     : Yup.string().optional("message is required , hint: min 3 charcters, maximum 15 charcters").min(3,"min 10 charcters")
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
    SetSubmitFormLoading(true)
    // console.log(values);

    //  setIsValues(values);   
    SetSubmitFormLoading(false)
   formValues={...values};
   sendFormDataToServer(formValues);
  },
 })

 const sendFormDataToServer = async (formData) => {
  try {
    const response = await fetch('https://mail-service-zr73.onrender.com/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      // console.log('Email sent successfully');
      // Optionally, you can reset the form here
      formik.resetForm()
    } else {
      console.error('Failed to send email');
    }
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

  return (
    <>
        <Helmet>
            <meta charSet                                                                   = "utf-8" />
            <title>IN - Contact Us</title>
        </Helmet>
    <div className='bg-custom-green min-h-screen flex flex-wrap justify-center items-center pt-16'>
      <div className="md:w-1/3">
        <img src={logo} alt="IN Marketing logo" />
      </div>
      <div className="md:w-1/2 md:text-start ">
      <p className='text-custom-green mb-3 md:ms-16 font-medium'>Contact Us</p>

      <h2 className='text-custom-gold text-4xl md:text-5xl lg:text-5xl md:ms-14 font-bold mb-3'>Get In Touch</h2>
      <form onSubmit                                                                      = {formik.handleSubmit} onReset={formik.handleReset} {...initialvalues} className='flex flex-wrap  justify-evenly md:justify-evenly items-center mx-auto w-5/6'>
      <div className                                                                            = "form-group mb-2  me-auto   w-1/2">
        {/* <label htmlFor                                                                              = "name" className={`fw-semibold text-uppercase `}>Name *</label> */}
        <input type                                                                                 = "text" className={`form-control form-control-sm p-2 w-5/6 me-6  bg-transparent border text-custom-gold border-custom-gold  rounded-lg`}  id='name' name='name' placeholder='  Name' value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
      </div>
     
      <div className                                                                            = "form-group mb-2  w-1/2">
        {/* <label htmlFor                                                                              = "name" className={`fw-semibold text-uppercase `}>Name *</label> */}
        <input type                                                                                 = "text" className={`form-control form-control-sm w-full p-2 bg-transparent border text-custom-gold border-custom-gold  rounded-lg`}  id='company' name='company' placeholder='  Company' value={formik.values.company} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
      </div>
      {formik.errors.name && formik.touched.name?<p className                                   = 'p-2 mb-4 w-1/3 text-sm text-red-800 rounded-lg    me-6  ' role="alert"> {formik.errors.name} </p>:"" }
      {formik.errors.company && formik.touched.company?<div className                                   = 'p-2 mb-4 text-sm text-red-800 rounded-lg   w-1/3' role="alert">{formik.errors.company}</div>:"" }

      <div className                                                                            = "form-group mb-2 w-full">
        {/* <label htmlFor                                                                              = "name" className={`fw-semibold text-uppercase `}>Name *</label> */}
        <input type                                                                                 = "text" className={`form-control w-full form-control-sm p-2  bg-transparent border text-custom-gold border-custom-gold  rounded-lg`}  id='website' name='website' placeholder='  website or social media link' value={formik.values.website} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
      </div>
     
      <div className                                                                            = "form-group mb-2  w-1/2">
        {/* <label htmlFor                                                                              = "name" className={`fw-semibold text-uppercase `}>Name *</label> */}
        <input type                                                                                 = "text" className={`form-control form-control-sm w-5/6  me-6 p-2 bg-transparent border text-custom-gold border-custom-gold  rounded-lg`}  id='phone' name='phone' placeholder='  Phone' value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
      </div>
      
      <div className                                                                            = "form-group mb-2    w-1/2">
        {/* <label htmlFor                                                                              = "name" className={`fw-semibold text-uppercase `}>Name *</label> */}
        <input type                                                                                 = "text" className={`form-control form-control-sm w-full p-2 bg-transparent border text-custom-gold border-custom-gold  rounded-lg`}  id='email' name='email' placeholder='  Email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
      </div>

      <div className                                                                            = "form-group mb-2 w-full">
        {/* <label htmlFor                                                                              = "name" className={`fw-semibold text-uppercase `}>Name *</label> */}
        <input type                                                                                 = "text" className={`form-control form-control-sm p-2 w-full bg-transparent border text-custom-gold border-custom-gold  rounded-lg`}  id='subject' name='subject' placeholder='  Service type' value={formik.values.subject} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
      </div>

      <div className                                                                              = "form-group mb-3  md:w-full">
        {/* <label htmlFor                                                                              = "notes" className={`fw-semibold text-uppercase ${styles.labelText}`}>{t("NoteAboutTheVisitor")}</label> */}
        <textarea rows                                                                              = "4" cols="40" className={`form-control form-control-sm w-full py-2 bg-transparent border text-custom-gold border-custom-gold  rounded-lg resize-none`} placeholder='    notes' id='message'name='message' value={formik.values.message} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
      </div>
      

      {SubmitFormLoading ? <button className={`form-group  mb-2 mx-auto md:mx-0  text-custom-gold  md:me-8 md:w-1/3`} type='submit'><i className='fa fa-spinner fa-spin'></i></button>:<button type                                                                    = "submit" disabled={!formik.isValid && formik.dirty } className=' mb-2 mx-auto md:mx-0 rounded-2xl p-2  md:me-8 md:w-1/3 bg-custom-gold text-white hover:bg-white border hover:border-custom-gold hover:text-custom-gold' > Submit</button>}

      </form>
      </div>
      
      </div>
    </>
  )
}
