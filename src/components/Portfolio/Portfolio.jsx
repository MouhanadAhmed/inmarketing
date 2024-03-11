import React from 'react'
import PageFlipSlider from '../PageFlipSlider/PageFlipSlider.jsx'
import ContactUs from '../ContactUs/ContactUs.jsx'
import { Helmet } from 'react-helmet'

export default function Portfolio() {
  return (
    <>
            <Helmet>
            <meta charSet                                                                   = "utf-8" />
            <title>IN - Portfolio</title>
        </Helmet>
    <PageFlipSlider/>
    <ContactUs/>
    </>
  )
}
