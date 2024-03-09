import React from 'react'
import logo from "../../assets/logo.png"
import Clients from '../../assets/clients logos.png'
export default function AboutUs() {
  return (
    <div className='bg-port-green min-h-screen'>

        <div className="flex flex-wrap justify-center md:text-start w-5/6 mx-auto items-center min-h-screen ">
            <div className="md:w-1/3 content-end">
                <img src={logo} alt="IN Marketing logo" className='w-full object-left'/>
            </div>
            <div className=" md:w-1/2">
                <p className='text-custom-cafe mb-3'>About Us</p>
                <h2 className='text-custom-gold text-4xl md:text-6xl lg:text-7xl font-bold'>About IN Marketing</h2>
                <h2 className='text-custom-gold text-4xl md:text-6xl lg:text-7xl font-bold mb-4'>Network</h2>
                <p className='text-white'>(IN) is a marketing management company that performs many operations or activities that work to discover the desires of customers and develop products and services that satisfy the desires of customers and satisfy their needs, thus achieving profits for the organization within an appropriate period of time, which varies from one organization to another.</p>
            </div>
        </div>
        <div className="md: flex-wrap justify-center text-start w-5/6 mx-auto items-center  container">
        <p className='text-custom-cafe mb-3 text-start w-4/6 mx-auto'>Clients</p>
        <h2 className='text-custom-gold  text-start w-4/6 mx-auto text-4xl md:text-5xl lg:text-6xl font-bold mb-0'>Here comes an intro about company.</h2>
        <img src={Clients} alt="IN Marketing clients" className='object-fill w-full p-0'/>
        </div>
        </div>
  )
}
