"use client"
import { useEffect,useRef,useState } from "react";
import { gsap } from 'gsap';
import {useCursorStore} from '@/store/store'
import Navbar from "@/components/Navbar/Navbar";
import MovingText from "@/components/MovingText/MovingText";
import styles from "./page.module.css";
import StrechtText from "@/components/StrechtText/StrechtText";
import ScrollSections from "@/components/ScrollSections/ScrollSections";
import DownStretchText from '@/components/DownStrechText/DownStrechTExt'
import SkillCover from "@/components/SkillCover/SkillCover";
import Footer from '@/components/Footer/Footer'
import Link from "next/link";
import { useRouter } from 'next/navigation';

import ContactSection from "@/components/ContactSection/ContactSection";
export default function Home() {

  let mouseLeaveFunction = useCursorStore((state) => state.setIsStudioHoverFalse)
  let mouseEnterFunction = useCursorStore((state) => state.setIsStudioHoverTrue)
  const svgRef = useRef(null);
  const [svgPosition, setSvgPosition] = useState({ x: "", y: "" });
  const router = useRouter();

  const handleMouseEnter = () => {
    handleScroll()
  };
  const handleScroll = () => {
    const rect = svgRef.current.getBoundingClientRect();
    setSvgPosition({x:rect.x,y:rect.y})
    console.log(rect,"rect handle scroll");
  };


  useEffect(() => {
    // Select all span elements within .hero-title and animate them
    // Get all span elements
    const spans = document.querySelectorAll(".hero-title span");
    // Animate each span with irregular timing
    spans.forEach((span, index) => {
      // Apply a unique delay for each span
      gsap.fromTo(
        span, 
        { scaleY: 0 }, // Initial state: collapsed
        { 
          scaleY: 1, // Final state: expanded
          duration:1, // Random duration between 2s and 5s
          ease: "power4.out", // Easing function
          delay: index===0 ?0.1:index===1 ?0.2:index===3 ?0:index===4 ?0.2:index===5 ?0.3:index===6 ?0.1:index===7 ?0.5:index===8 ?0.1:0, // Random delay before starting animation
          transformOrigin: "bottom center" // Ensure scaling from the bottom
        }
      );
    });
   
  }, []);


  useEffect(()=>{
    const t1 = gsap.timeline();
    const t2 = gsap.timeline();

    t1.fromTo(
      ".banner_bottom_bar", 
      { y: '20vh', opacity: 0 }, // Initial state: below the viewport
      { 
        y: '0vh', // Final state: in the viewport
        opacity: 1,
        duration: 3, // Duration of the animation
        ease: "power4.out" // Easing function
      }
    );
    
    // Add a delay of 5 seconds before starting the animation
    t2.fromTo(
      ".para_text", 
      { y: '20vh', opacity: 0 }, // Initial state: below the viewport
      { 
        y: '0vh', // Final state: in the viewport
        opacity: 0.4,
        duration: 3, // Duration of the animation
        ease: "power4.out" // Easing function
      }
    );

    t1.delay(0.45);
    t2.delay(0.85);


    gsap.fromTo(
      ".test",
      {
        opacity: 0.3,
      },
      {
          opacity: 1,
          duration: 1,
          ease: "linear.none",
        scrollTrigger: {
          trigger: ".test",
          start: "top bottom-=100",
          end: "bottom top+=250",
          scrub: true,
          pin: false,
          // markers: true, // Show markers for debugging

        },
      }
    );


    
    // Add a delay of 5 seconds before starting the animation
  },[])

  return (
    <div className="site_padding dark_background">
        <Navbar type="white"/>

    <main className={`${styles.Hero_Section} flex_column`}>
        <div className={`${styles.Hero_container} flex_row`} >
          <StrechtText text="M.ZEESHAN" color="white"/>
        </div>
        <div className="flex_row">

        <p className={`${styles.hero_subtitle} para_text`}>I&#39;m a Senior Product Designer with 10+ years of experience in creating impactful user experiences and building 9 startups from the ground up. My expertise includes leading design teams, user research, and product architecture, with a strong focus on design strategy and user-centered design. I am committed to combining creativity with technical skills to deliver high-quality, ethical, and accessible design solutions.</p>
        </div>
        <div className="flex_row_spaced_between width100 banner_bottom_bar">

          
          <a href="#featuredProducts" className="flex_row gap1rem "  onMouseEnter={handleMouseEnter}>
        <MovingText text="Scroll to Explore" h4={true} boxWidth="120px" type="scrollToExplore" iconposition={svgPosition}/>
        <div className="svg_icon">
        <svg ref={svgRef} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="currentColor">
          <path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" fill="currentColor"/>
          </svg>
          
          </div>
        </a>
       
       <a href="#featuredProducts">
        <MovingText text="Featued Products" h4={true} boxWidth="130px" type="none"/>
        </a>
        </div>

    </main>


    <div id="featuredProducts">
    <ScrollSections />
    </div>


    <div className={`flex_column gap2rem ${styles.SkillCoverContainer}`}>
      <p className={`${styles.hero_subtitle_skill_section}`}>From sketches to finished products, explore the evolution of my designs.</p>
      <Link className="btn" href={"/projects"}>
      <MovingText text="See All Works" h3={true} boxWidth="120px" type={"none"}/>
      </Link>
      <div className="flex_column gap2rem width100">
      <SkillCover/>
      </div>
    </div>



    <div className="flex_column gap2rem width100" >
    {/* <p className={`${styles.hero_subtitle_skill_section}`}>From sketches to finished products, explore the evolution of my designs.</p> */}

      <div className="flex_row gap1rem wrap" >
      {[1,10,9,7,8,6,11,12].map((item,i)=>{
        return <div  key={i} style={{width:"3rem"}}>
          <img src={`/tools/${item}.png`} />
        </div>
      })}
      </div>
    </div>
    <ContactSection />



    <div className={`test flex_column gap2rem ${styles.downTextMainContainer}`}>
      <p className={`${styles.DownText_heading, styles.hero_subtitle_skill_section}`}>Curious about my design evolution and the projects I&#39;ve built from scratch? Click here to explore my story.</p>
      <div className={`flex_row gap2rem `} onMouseEnter={mouseEnterFunction} onMouseLeave={mouseLeaveFunction}  onClick={()=>{router.push('/about');mouseLeaveFunction()}}>
      <DownStretchText text="MY"  color="white"/>
      <DownStretchText text="STORY"  color="white"/>
      </div>
    </div>

    <Footer color={"white"}/>
 
 
 
  </div>
  );

}

