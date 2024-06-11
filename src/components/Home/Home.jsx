import React from 'react';
import styles from './Home.module.css';
import logo from "../../assets/logo.png"
import Services from '../Services/Services.jsx';
import PageFlipSlider from '../PageFlipSlider/PageFlipSlider.jsx';
import Clients from '../Clients/Clients.jsx';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <>
            <Helmet>
            <meta charSet                                                                   = "utf-8" />
            <title>IN Marketing </title>
        </Helmet>
    <main className={`relative lg:min-h-screen bg-cover bg-center  container mx-auto  `}>
      <div className="flex flex-wrap justify-center items-center shrink lg:shrink-0 content-center px-8 h-screen">

      <div id="home" className={` inset-0 backdrop-filter backdrop-blur-xs  md:h-min w-full md:w-2/3 px-4 ${styles.slideIn}`}>
        <div className="text-white dark:text-white flex flex-col justify-center items-center md:items-start  px-3 py-8">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold py-4 text-center md:text-start text-custom-gold">
            Welcome to <br /> IN Marketing
          </h1>
          <h3 className="text-center md:text-start text-lg md:text-2xl lg:text-2xl dark:text-custom-green text-custom-green font-medium mb-10">
            If you’re ready, we’re IN
          </h3>
          <Link to={'/contact'} className="bg-custom-gold dark:bg-custom-gold p-3 px-8 rounded-full font-medium text-lg md:text-xl lg:text-lg inline-block hover:bg-white hover:text-custom-gold border hover:border-custom-gold ">
            Contact us now
          </Link>
        </div>
      </div>
      <div className="w-full md:w-1/3 px-4 order-first lg:order-none">
        <img src={logo} className='w-full' alt="IN marketing logo" />
      </div>
      </div>
    </main>
    <Services/>
    {/* <h3 className='bg-port-green text-custom-gold text-4xl md:text-6xl lg:text-8xl font-bold py-4 text-center md:text-start'>Previous Works</h3> */}
    <PageFlipSlider title="Previous Works"/>
    
    <Clients/>
    </>
  );
}
