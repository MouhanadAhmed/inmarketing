import React from 'react'
import { SimpleCard } from '../Card/Card.jsx'
import exp from "../../assets/+3in copy.png"
import idea from "../../assets/ideac .png"
import ContactUs from '../ContactUs/ContactUs.jsx'
import { Helmet } from 'react-helmet'
import ads from '../../assets/ads (1).png'
import branding from '../../assets/brandinng.png'
import marketing from '../../assets/marketing (1).png'
import media from '../../assets/media .png'
import social from '../../assets/social (1).png'
export default function Services() {
  // console.log(window.location)
  return (
    <>
     {  window.location.pathname !== "/"?     <Helmet>
            <meta charSet                                                                   = "utf-8" />
            <title>IN - Services</title>
        </Helmet> :""}
    <div className="p-8 min-h-screen bg-serv-green pt-24">
    {/* <p className='text-start'>IN Network</p> */}
    <h2 className='text-4xl md:text-6xl lg:text-7xl font-bold text-custom-gold mb-3'>Focused on results we seek to raise the level of our customers</h2>
    <p className='font-medium text-custom-green mb-8 2xl:mb-16'>For over 5 years we have been developing digital solutions for companies looking to gain better visibility on the internet.</p>
    
    <div  className="flex flex-col md:flex-row  justify-center items-center  py-4 mb-3">
    <div className="w-5/6 mx-auto md:w-2/4  block md:flex   md:justify-center">
      <img src={idea} alt="idea"  className='     object-scale-down'/>
    </div>

    <div className="flex flex-col flex-wrap justify-evenly w-full md:w-2/4   py-4 mb-3">

    <SimpleCard 
      title="Marketing Service" 
      icon="fa-people-group" 
      desc1="Make your brand soar with our comprehensive marketing services."
      desc="Make your brand soar with our comprehensive marketing services. We specialize in comprehensive strategic marketing planning to create compelling content to enhance your visibility, engage customers and achieve success.
      Let us design solutions to make your brand unique"
      img={marketing}
    />

    <SimpleCard 
      title ="Social Media Management" 
      icon="fa-hashtag"   
      desc1="Improve your online presence with our specialized social media management services"
      desc="Improve your online presence with our specialized social media management services. We handle strategic planning, content creation and engagement to enhance your brand's visibility and connect with your audience effectively. Improve your social media performance with our customized solutions. "
      img={social}
    />

    <SimpleCard 
      title ="Online Advertising" 
      icon="fa-rectangle-ad" 
      desc1="enhance your digital reach with our online advertising expertise  "
      desc="enhance  your digital reach with our online advertising expertise. From strategic planning to impactful campaigns, we craft customized solutions to increase your brand's visibility and drive the best results. Boost your online presence with our targeted advertising strategies."
      img={ads}
    />
    {/* <SimpleCard 
      title ="Website Design" 
      icon="fa-laptop-code" 
      desc1="Change your online presence with our web design experience."
      desc="Change your online presence with our web design experience. From intuitive layouts to visually distinct interfaces, Lift up your brand digital experience with our customized web design solutions, with a DEFULPER team analyzing your requirements, a trial version to verify your requirements, technical support to resolve all possible post-implementation problems"
    /> */}
     <SimpleCard 
      title ="Media Service" 
      icon="fa-icons" 
      desc1="Improve your brand through our media services."
      desc="Improve your brand through our media services. Starting from coordinated planning with the intended marketing goal to implementation with distinguished professional performance, let us shape your media presence to achieve success."
      img={media}
    />
    <SimpleCard 
      title ="Branding Service" 
      icon="fa-trademark" 
      desc1="Let your visual identity speak for you with our comprehensive branding services"
      desc="Let your visual identity speak for you with our comprehensive branding services. We specialize in creative planning and design to make your brand appear distinctive and leave a lasting impression on everyone who sees it. Make your brand have a distinctive and unforgettable presence"
      img={branding}
    />
    </div>
    </div>
    {/* <div className="flex flex-col flex-wrap justify-center  gap-24 gap-y-8 -mx-4 py-4 mb-3">


   
    </div> */}

    <div className="flex flex-wrap justify-center items-center   mx-auto  w-5/6">
      <div className="w-full md:w-1/3 ms-auto">
        <img src={exp} alt="experience" className='object-scale-down' />
      </div>
      <div className="w-full md:w-2/3 text-custom-green max-h-min mx-auto">
  <div className="flex flex-wrap justify-center items-center">
    <p className="text-lg lg:text-xl mb-3 pt-4 md:pt-8 text-center">
      Everything we do has the commitment of a professional and motivated team to deliver the highest results.
    </p>

    {/* Uncomment and adjust the image section if needed */}
    {/* <div className="w-full md:w-1/4 pt-0">
      <img src={logo} className="w-full md:w-3/4 mx-auto" alt="IN marketing logo" />
    </div> */}

    <div className="w-full md:w-3/4 pt-0">
      <p className="text-center text-custom-gold mx-auto w-full  mb-4">
        Know a little about our history and the path we have traveled that has brought us to the level we are today.
      </p>


    
    



      <div className="w-full flex flex-col items-center space-y-3">
      <ul class="space-y-4 text-left text-custom-green dark:text-custom-green">
    <li class="flex items-center space-x-3 rtl:space-x-reverse">
         <svg class="flex-shrink-0 w-3.5 h-3.5 text-custom-gold dark:text-custom-gold" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
         </svg>
        <span>We excel in developing marketing solutions for companies.</span>
    </li>
    <li class="flex items-center space-x-3 rtl:space-x-reverse">
        <svg class="flex-shrink-0 w-3.5 h-3.5 text-custom-gold dark:text-custom-gold" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
         </svg>
        <span>We seek to establish the right concept of marketing to our customers.</span>
    </li>

</ul>
      </div>
    </div>
  </div>
</div>

    </div>

    </div>
     { window.location.pathname !== "/"? <ContactUs/> :""}
    </>
  )
}
