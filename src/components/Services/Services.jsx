import React from 'react'
import { SimpleCard } from '../Card/Card.jsx'
import exp from "../../assets/+3in copy.png"
import logo from "../../assets/logo.png"
import ContactUs from '../ContactUs/ContactUs.jsx'
import { Helmet } from 'react-helmet'
export default function Services() {
  console.log(window.location)
  return (
    <>
     {  window.location.pathname !== "/"?     <Helmet>
            <meta charSet                                                                   = "utf-8" />
            <title>IN - Services</title>
        </Helmet> :""}
    <div className="p-8 min-h-screen bg-serv-green ">
    {/* <p className='text-start'>IN Network</p> */}
    <h2 className='text-4xl md:text-6xl lg:text-7xl font-bold text-custom-gold mb-3'>Focused on results we seek to raise the level of our customers</h2>
    <p className='font-medium text-white mb-8 2xl:mb-16'>For over 3 years we have been developing digital solutions for companies looking to gain better visibility on the internet.</p>
    
    <div className="flex flex-wrap justify-evenly 2xl:gap-2 gap-4 gap-y-8 -mx-4 py-4 mb-3">

    <SimpleCard 
      title="Marketing Service" 
      icon="fa-people-group" 
      desc="Elevate your brand with our all-encompassing marketing services. We specialize in strategic planning, digital campaigns, and compelling content creation to enhance your visibility, engage customers, and drive success. Let us tailor solutions for your brand's unique journey."
    />

    <SimpleCard 
      title ="Social Media Management" 
      icon="fa-hashtag"   
      desc="Optimize your online presence with our expert Social Media Management services. We handle strategic planning, content creation, and engagement to boost your brand's visibility and connect with your audience effectively. Elevate your social media game with our tailored solutions."
    />

    <SimpleCard 
      title ="Online Advertising" 
      icon="fa-rectangle-ad" 
      desc="Transform your digital reach with our Online Advertising expertise. From strategic planning to impactful campaigns, we craft tailored solutions to maximize your brand exposure and drive results. Amplify your online presence with our targeted advertising strategies."
    />
    <SimpleCard 
      title ="Media Service" 
      icon="fa-icons" 
      desc="Elevate your brand through our Media Services. From strategic planning to impactful campaigns, we offer tailored solutions to maximize your visibility and engagement. Let us shape your media presence for success."
    />
    <SimpleCard 
      title ="Branding Service" 
      icon="fa-trademark" 
      desc="Define your brand with our comprehensive Branding Services. We specialize in strategic planning, creative design, and impactful campaigns to enhance your brand identity and leave a lasting impression. Elevate your brand with our tailored solutions for a distinctive and memorable presence."
    />
    <SimpleCard 
      title ="Website Design" 
      icon="fa-laptop-code" 
      desc="Transform your online presence with our Web Design expertise. From intuitive layouts to visually stunning interfaces, we craft websites that captivate and engage. Elevate your brand's digital experience with our tailored web design solutions."
    />
    </div>

    <div className="flex flex-wrap justify-center items-center   mx-auto  w-5/6">
      <div className="w-full md:w-1/3 ms-auto">
        <img src={exp} alt="experience" className='object-scale-down' />
      </div>
      <div className="w-full md:w-2/3 text-white max-h-min me-auto">
        <div className="flex flex-wrap justify-center items-center ">
        <p className=' text-lg lg:text-xl pt-16 md:pt-36'>Everything we do has the commitment of a well trained and motivated team.</p>
          <div className="w-full h-min-content md:w-2/4 pt-0  ">
          <img src={logo} className='w-full ms-auto md:w-3/4'  alt="IN marketing logo" />
          </div>
          <div className="w-full md:w-2/4 pt-0">
            
            <p className='text-center md:text-start w-full md:w-5/6 mb-4 '>Get to know a little of our history and the road we traveled that took us to the level we are today.</p>
            <div className=' w-full md:w-5/6  mb-3'><i className="fa-solid fa-check text-custom-gold me-3 text-start"></i> <p className='inline text-start'>We are excellence in developing web solutions for companies.</p> </div>
            <div className=' w-full md:w-5/6  mb-3'><i className="fa-solid fa-check text-custom-gold me-3 text-start"></i> <p className='inline text-start'>We seek to build something that changes people's lives.</p> </div>
            {/* <div className='text-center  w-full md:w-5/6  mb-3'><i className="fa-solid fa-check text-custom-gold me-3 text-start"></i>  We seek to build something that changes people's lives.</div> */}
          </div>
        </div>
      </div>
    </div>

    </div>
     { window.location.pathname !== "/"? <ContactUs/> :""}
    </>
  )
}
