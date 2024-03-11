import React, { useRef, useState }  from 'react'
import HTMLFlipBook from 'react-pageflip';

import sopa1 from '../../assets/sopa1.svg'
import sopa2 from '../../assets/sopa2.svg'
import sopa4 from '../../assets/sopa4.svg'
import one from '../../assets/test1.jpeg'
import two from '../../assets/test2.jpg'
import three from '../../assets/test3.jpeg'
import flipAudio from '../../assets/page-flip-02.mp3'
import four from '../../assets/test4.jpeg'
export default function PageFlipSlider(props) {
  const ref = useRef();
  const [currentPage, setCurrentPage] = useState(0);
  const [isAudio,setAudio] = useState(true);
  const [mute,setMute] = useState("fa-volume-xmark");
  const handleSliderChange = () => {
    // Play the audio when the slider changes
    const audio =new Audio(flipAudio);
    isAudio && audio.play();
    !isAudio && setMute("fa-volume-high")
    isAudio && setMute("fa-volume-xmark")
  };

  const goToLastPage = () => {
    const pageNum =  ref.current.pageFlip().getPageCount();
    console.log(pageNum)
    ref.current.pageFlip().flip(pageNum-1)
  };
  const goToFirstPage = () => {
    // const pageNum =  ref.current.pageFlip().getPageCount();
    // console.log(pageNum)
    ref.current.pageFlip().flip(0)
  };

  return (
    <div className=" bg-port-green ">

    {props.title? 
    <h3 className='md:ps-8 md:pt-8 md:mb-14 text-custom-gold text-4xl md:text-5xl lg:text-7xl font-bold py-4 text-center md:text-start'>Previous Works</h3>
    :null
    }
    <div className='mt-6 w-full mx-auto  sm:w-1/2 md:w-1/4 xl:w-1/4 2xl:w-1/4 mb-3 cursor-pointer text-white p-4 bg-custom-gold border-2 border- rounded-lg hover:bg-white hover:text-custom-gold '>
    {/* <i className="fa-solid fa-expand mx-3 fa-xl"></i> */}
    <i className="fa-solid fa-backward-step mx-3 fa-xl" onClick={goToFirstPage}></i>
    <i className="fa-solid fa-caret-left mx-3 fa-xl"  onClick={()=> ref.current.pageFlip().flipPrev()}></i>
    <i className="fa-solid fa-caret-right mx-3 ms-6 fa-xl" onClick={()=> ref.current.pageFlip().flipNext()}></i>
    <i className="fa-solid fa-forward-step mx-3 fa-xl"  onClick={goToLastPage}></i>
    <i className={`fa-solid  mx-3 fa-xl ${mute}`} onClick={()=>setAudio(!isAudio)}></i>
    </div>
    <div className='overflow-hidden overscroll-none flex justify-center items-center md:pb-8  pb-4 '>
    <HTMLFlipBook width={320}
    height={455}
    size="stretch"
    minWidth={250}
    maxWidth={350}
    minHeight={250}
    maxHeight={350}
    maxShadowOpacity={0.5}
    showCover={true}
    onFlip= {handleSliderChange} 
    ref={ref}
    on={(e)=> console.log(e)}
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
    </div>
  )
}
