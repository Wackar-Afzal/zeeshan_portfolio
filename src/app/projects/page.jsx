"use client"
import React ,{useEffect, useState,useRef} from 'react'
import { gsap } from 'gsap';
import Navbar from '@/components/Navbar/Navbar'
import {useCursorStore} from '@/store/store'
import styles from '@/app/page.module.css'
import StrechtText from '@/components/StrechtText/StrechtText'
import DownStretchText from '@/components/DownStrechText/DownStrechTExt'
import MovingText from '@/components/MovingText/MovingText'
import ParallexScroll from '@/components/ParallexScroll/ParallexScroll'
import { data } from '@/utils/Projects_data';
import MovingButton from '@/components/MovingButton/MovingButton';
import Footer from '@/components/Footer/Footer';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Backbtn from '@/components/BackBtn/Backbtn';
import { useRouter } from 'next/navigation';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const [SelectedCategory, setSelectedCategory] = useState("all")
  const [filteredData, setFilteredData] = useState(data)
  let mouseLeaveFunction = useCursorStore((state) => state.setIsStudioHoverFalse)
  let mouseEnterFunction = useCursorStore((state) => state.setIsStudioHoverTrue)
  const router = useRouter();


  const svgRef = useRef(null);
  const [svgPosition, setSvgPosition] = useState({ x: "", y: "" });

  const handleMouseEnter = () => {
    handleScroll()
  };
  const handleScroll = () => {
    const rect = svgRef.current.getBoundingClientRect();
    setSvgPosition({x:rect.x,y:rect.y})
    console.log(rect,"rect handle scroll");
  };



  const filter_data = (category) => {

    setSelectedCategory(category)
    // console.log(category,"klk")
    if(category === "all"){
      setFilteredData(data)
    }else{
     const newData =  data.filter((item) => item.category === category);
      setFilteredData(newData)
    }

  }

  useEffect(() => {
    const spans = document.querySelectorAll(".hero-title span")
    spans.forEach((span, index) => {
      gsap.fromTo(
        span, 
        { scaleY: 0 },
        { 
          scaleY: 1,
          duration: 1,
          ease: "power4.out",
          delay: [0.1, 0.2, 0, 0.2, 0.3][index] || 0,
          transformOrigin: "bottom center"
        }
      )
    })

    const tl1 = gsap.timeline()
    const tl2 = gsap.timeline()

    tl1.fromTo("#banner_bottom_bar", {  opacity: 0 }, {  opacity: 1, duration: 1, ease: "power4.out" })
    tl2.fromTo("#para_text", {  opacity: 0 }, { opacity: 0.4, duration: 1, ease: "power4.out" })

    tl1.delay(0.1)
    tl2.delay(0.2)

    gsap.fromTo(
      "#test",
      { opacity: 0.3 },
      {
        opacity: 1,
        duration: 1,
        ease: "linear.none",
        scrollTrigger: {  
          trigger: "#test",
          start: "top bottom-=50",
          end: "bottom bottom-=180",
          scrub: true,
        },
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])



  return (
    <div className='white_background site_padding' >
       <Navbar type="black"/>
       <Backbtn color="black"/>
       <main className={`flex_column gap2rem ${styles.pt15vh}` }>
        <div className={`${styles.Hero_container} flex_row`} >
          <StrechtText text="PROJECTS" color={"black"}/>
        </div>
        <div className="flex_row">
        <p id="para_text"className={`${styles.hero_subtitle_projects }  para_text`} >Here, you&#39;ll find a curated selection of my most notable projects, each showcasing my skills and dedication to delivering high-quality digital experiences. These projects reflect my ability to replicate live products, reimagined under different names with minor modifications. This ensures originality while maintaining the essence of proven, successful designs.<br/>All portfolio work presented here is independent of any rights or claims by the companies I have worked with, as they represent my own learning and creative exploration. Browse through to discover the range of projects I&#39;ve developed and the impact they&#39;ve made.</p>
        </div>
        <div id="banner_bottom_bar"className={`flex_row_spaced_between width100 ${styles.banner_bottom_bar} wrap`} >
        <div className='flex_row gap1rem wrap'>
          <MovingButton text={"All"} boxWidth='20px' SelectedCategory={SelectedCategory} color={"black"} id="all" onClickFunction={filter_data}/>
          <MovingButton text={"Web"} boxWidth='30px' SelectedCategory={SelectedCategory} color={"black"} id="Web_app" onClickFunction={filter_data}/>
          <MovingButton text={"Mobile"} boxWidth='50px' SelectedCategory={SelectedCategory} color={"black"} id="Mobile_app" onClickFunction={filter_data}/>
          <MovingButton text={"Case Study"} boxWidth='80px' SelectedCategory={SelectedCategory} color={"black"} id="Case_study" onClickFunction={filter_data}/>
          <MovingButton text={"Project Management"} boxWidth='130px' SelectedCategory={SelectedCategory} color={"black"} id="Project Management" onClickFunction={filter_data}/>

        </div>
        <a href="#Projects_section" className={`flex_row gap1rem ${styles.Projects_section_link}`}  onMouseEnter={handleMouseEnter}>
          <MovingText  color={"black"} text="Scroll to Explore" h4={true} boxWidth="120px" type="scrollToExplore" iconposition={svgPosition}/>
          <div className="svg_icon" >
          <svg    ref={svgRef} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="black">
            <path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" fill="black"/>
          </svg>
            
          </div>
        </a>



        </div>

    </main>
       {/* <div style={{height:"1.4px", backgroundColor:"rgba(128,128,128,0.2)",backdropFilter:"blur(5px)", margin:"0rem -4rem"}}></div> */}






       <div id="Projects_section"className={'Projects_section'}>
        <ParallexScroll  data={filteredData}/>
       </div>





       <div id="test" className={`test flex_column ${styles.downTextMainContainer}`}>
      <p className={`${styles.DownText_heading, styles.hero_subtitle_skill_section}`} style={{color:"black",opacity:0.4}}>EXPLORING OUR WORLD OF VISUAL AND INTERACTIVE DESIGN</p>
      <div className={`flex_row gap2rem `} onMouseEnter={mouseEnterFunction} onMouseLeave={mouseLeaveFunction}  onClick={()=>{router.push('/about');mouseLeaveFunction()}}>
      <DownStretchText text="ABOUT"  color="black"/>
      <DownStretchText text="ME"  color="black"/>
      </div>
    </div>

      <Footer color={"black"} />
      </div>
  )
}

export default Projects