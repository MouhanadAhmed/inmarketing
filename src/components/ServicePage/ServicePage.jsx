import React from 'react'
import {Helmet} from "react-helmet";
import { useLocation } from 'react-router-dom';
import ContactUs from '../ContactUs/ContactUs.jsx';


export default function ServicePage() {
  const location = useLocation();
  const {title, icon, desc} =location.state || {};
  // console.log(myProps);

  return (
    <>
    <div className='bg-serv-green  p-8'>
                  <Helmet>
                <meta charSet="utf-8" />
                <title>IN - {title}</title>
                <meta name={desc} content={title} />
            </Helmet>
      <h2 className="  mx-3 md:mx-0  2xl:mx-0  p-4 text-custom-gold text-4xl md:text-5xl lg:text-6xl font-bold py-4 delay-100">{title}</h2>
      <p className='text-white'>{desc}</p>
      </div>
      <ContactUs/>
    </>
  )
}
