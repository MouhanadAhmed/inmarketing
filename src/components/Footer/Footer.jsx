import React from 'react'
import styles from "./Footer.module.css"
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <>
    <div className='bg-footer-green pt-24 mx-auto'>
        <div className="md:flex flex-wrap justify-center items-center w-4/6 mx-auto">
            <div className="flex flex-col justify-center items-center  md:text-start md:w-1/2 mb-8 md:mx-0">
                <h3 className='text-bold text-xl md:ps-24 md:text-start w-full text-custom-gold mb-3'>About IN Network</h3>
                <p className='text-white  md:ps-24 md:text-start  md:me-auto mb-4 pb-2'>Get to know a little of our history and the road we traveled that took us to the level we are today.</p>
                 <p className="flex felx-wrap justify-center items-center w-full">
                <a href="https://www.facebook.com/IN.mktg.ag?mibextid=JRoKGi" target='blank'><i className="fa-brands fa-facebook fa-2xl pt-4 me-8 text-custom-gold"></i></a> 
                <a href="https://www.instagram.com/in.mktg.ag?igsh=MWt1M2U5OTY0YWxrbQ==" target='blank'><i className="fa-brands fa-instagram fa-2xl pt-4 me-8 text-custom-gold"></i></a> 
                <a href="https://wa.me/201555547247" alt="Chat on WhatsApp" target='blank'><i className="fa-brands fa-whatsapp fa-2xl pt-4 text-custom-gold"></i></a> 
                 {/* <i class="fa-brands fa-instagram fa-2xl pt-4 text-custom-gold"></i> */}
               </p>
            </div>
            <div className="md:w-1/2 md:mb-8">
                <h3 className='text-bold text-xl md:ps-24  w-full text-custom-gold mb-3'>Newsletter</h3>
                <p className='text-white  md:ps-24   md:me-auto mb-4 pb-2'>Subscribe our newsletter to get our latest updates & news.</p>
                <div className={`${styles.newsletter} md:mb-4  ms-auto`}>
                <div className={styles.contentForm}>
                    <input type="email" name="EMAIL" placeholder="Email address" required="" className='focus-visible:border-none  active:border-none focus:border-none'/>
                    <span className={styles.formAction}>
                        <i className={`${styles.las} fa-solid text-custom-gold cursor-pointer fa-2xl fa-circle-chevron-right`}></i>
                    <input className={styles.newsletterSubmit} type="submit" value="Send"/>
                    </span>
                </div>
                </div>
            </div>
        </div>
        
        </div>
        <div className='bg-black md:flex flex-wrap justify-center items-center md:px-10 py-1 text-white'>
            <p className=' md:text-start '>© Copyright 2024 By IN Marketing</p>
            <img src={logo} alt="IN Marketing logo"  className='mx-auto w-16'/>
            <Link to={"/"} className='md:text-start hover:text-custom-gold'>Get in touch</Link>
        </div>
        </>
  )
}
