import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Six_Caps } from "next/font/google";
import Link from "next/link";
import "./ScrollSections.css";
gsap.registerPlugin(ScrollTrigger);
const six_Caps = Six_Caps({ subsets: ["latin"], weight:["400"] });

const ScrollSections = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    sections.forEach((section) => {
      gsap.fromTo(
        section,
        {
          opacity: 1,
          filter: "blur(0px)",
          scale: 1,
        },
        {
          filter: "blur(10px)",
            position:"sticky",
            top:"40px",
            scale: 0.8,
            opacity: 1,
            duration: 1,
            ease: "linear.none",
          scrollTrigger: {
            trigger: section,
            start: "top top+=70",
            end: "bottom+=48 top",
            scrub: true,
            pin: false,
            // markers: true, // Show markers for debugging

          },
        }
      );
    });


    // Refresh ScrollTrigger after setting up animations
    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="">
    <div className="flex_column width100" >
      <Link href="/projects/3" className="section width100" id="section1"> 
        <div  className={`scroll_section_text flex_row_spaced_between`}>
          <h2>Fitness App</h2>
        <div className="flex_row gap1rem">
          <span>FitTech</span>
          <span>Case Study</span>
        </div>
        </div>
      </Link>
      <Link href="/projects/1"className="section width100"   id="section2">
      <div  className={`scroll_section_text flex_row_spaced_between`}>
          <h2>Study Sync</h2>
        <div className="flex_row gap1rem">
          <span>EdTech</span>
          <span>Case Study</span>
        </div>
        </div>
      </Link>
      <Link href="/projects/4" className="section width100"   id="section3">
      <div  className={`scroll_section_text flex_row_spaced_between`}>
          <h2>Violet</h2>
        <div className="flex_row gap1rem">
          <span>Fintech</span>
          <span>Web Design</span>
        </div>
        </div>

      </Link>
      <Link href="/projects/2" className="section width100"   id="section4">
      <div  className={`scroll_section_text flex_row_spaced_between`}>
          <h2>PETS MAZE</h2>
        <div className="flex_row gap1rem">
          <span>PetTech</span>
          <span>Case Study</span>
        </div>
        </div>

      </Link>
    <Link href="/projects/6" className="LastSection width100" style={{height:"80vh", width:"100%", marginTop:"14rem"}}>
    {/* <span  className={`scroll_section_text `} style={{color:"white", zIndex:11}}>GLOBAL PAY</span> */}
    <div  className={`scroll_section_text flex_row_spaced_between`}>
          <h2>AI Platform</h2>
        <div className="flex_row gap1rem">
          <span>Tech</span>
          <span>Web Design</span>
        </div>
        </div>
    </Link>

    </div>

    </div>
  );
};

export default ScrollSections;
