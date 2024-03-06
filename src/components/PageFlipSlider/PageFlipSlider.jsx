import React from 'react'
import HTMLFlipBook from 'react-pageflip';

import sopa1 from '../../assets/sopa1.svg'
import sopa2 from '../../assets/sopa2.svg'
import sopa4 from '../../assets/sopa4.svg'
import one from '../../assets/test1.jpeg'
import two from '../../assets/test2.jpg'
import three from '../../assets/test3.jpeg'
import four from '../../assets/test4.jpeg'
export default function PageFlipSlider() {
  return (
    <div className='overflow-hidden overscroll-none flex justify-center items-center  min-h-screen  bg-port-green'>

    <HTMLFlipBook width={320}
    height={455}
    size="stretch"
    minWidth={250}
    maxWidth={350}
    minHeight={250}
    maxHeight={350}
    maxShadowOpacity={0.5}
    showCover={true}
    mobileScrollSupport={true} className=' container-md'>
     <img className="demoPage" src={one} alt="" /> 
     <img className="demoPage" src={one} alt="" /> 
     <img className="demoPage" src={two} alt="" /> 
     <img className="demoPage" src={three} alt="" /> 
     <img className="demoPage" src={four} alt="" /> 
     <img className="demoPage" src={sopa1} alt="" /> 
     <img className="demoPage" src={sopa2} alt="" /> 
     <img className="demoPage" src={sopa4} alt="" /> 
</HTMLFlipBook>

    </div>
  )
}
