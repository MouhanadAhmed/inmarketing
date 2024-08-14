import React, { useEffect } from 'react'
import {Helmet} from "react-helmet";
import { useLocation } from 'react-router-dom';
import ContactUs from '../ContactUs/ContactUs.jsx';


export default function ServicePage() {
  const location = useLocation();
  const {title,  desc, img} =location.state || {};
  // console.log(myProps);

  useEffect(()=>{
      window.scrollTo({ top: 0, behavior: 'smooth' });
    console.log('img',img);
  },[])

  return (
    <>
                  <Helmet>
                <meta charSet="utf-8" />
                <title>IN - {title}</title>
                <meta name={desc} content={title} />
            </Helmet>
            <div className='flex flex-col md:flex-row justify-center items-center'>


    <div className='bg-serv-green md:w-3/5 p-8'>
      <h2 className="  mx-3 md:mx-0  2xl:mx-0 md:pt-40 p-4 text-custom-gold text-4xl md:text-5xl lg:text-6xl font-bold md:py-4 delay-100">{title}</h2>
      <p className='text-custom-green'>{desc}</p>
      </div>
      <div className='md:w-2/5 pt-16 order-first lg:order-none'>
        <img src={`${img}`} alt="service img" className="object-scale-down md:w-5/6" />
      </div>
            </div>
      <ContactUs/>
    </>
  )
}
