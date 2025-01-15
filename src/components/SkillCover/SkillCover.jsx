"use client"
import React ,{useEffect}from 'react'
import "./SkillCover.css"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Six_Caps } from "next/font/google";
const six_Caps = Six_Caps({ subsets: ["latin"], weight:["400"] });


gsap.registerPlugin(ScrollTrigger);

const skills=["Web design","User Interface (UI)","User Experience(UX)","Customer Experience (CX)","Product Management","Product Mapping","Team Lead"]


const SkillCover = () => {
    useEffect(() => {
        const sections = document.querySelectorAll(".skill_cover_text");
        sections.forEach((section,i) => {
          gsap.fromTo(
            section,
            {
              opacity: 0.1,
            },
            {
                opacity: 1,
                duration: 1,
                ease: "linear.none",
              scrollTrigger: {
                trigger: section,
                start: `top top+=${210+(i*30)}` ,
                end: "bottom center",
                scrub: true,
                pin: false,
                // markers: true, // Show markers for debugging
  
              },
            }
          );
        });

        
        gsap.fromTo(
            '.my_skill_cover',
            {
              visibility: "hidden",
            },
            {
              visibility: "visible",
              position:"sticky",
              top: "0px",
                duration: 1,
                ease: "linear.none",
              scrollTrigger: {
                trigger: '.my_skill_cover',
                start: "top top+=140",
                end: "bottom bottom-=100",
                scrub: true,
                pin: false,
                // markers: true, // Show markers for debugging
              },
            }
          );


          gsap.fromTo(
            '.my_skill_cover',
            {
              visibility: "visible",
            },
            {
              visibility: "hidden",
                duration: 1,
                ease: "linear.none",
              scrollTrigger: {
                trigger: '.endTriggerClass',
                start: "top center+=70",
                end: "bottom top",
                scrub: true,
                pin: false,
                // markers: true, // Show markers for debugging
              },
            }
          );
       
        // Refresh ScrollTrigger after setting up animations
        ScrollTrigger.refresh();
      }, []);
  return (
    <div className='skill_cover_section flex_column width100 gap2rem'>
        <h4 className='my_skill_cover flex_row'>My Skill Cover</h4>
        {skills.map((skill,i)=>{
            return <span key={i} className={`skill_cover_text ${six_Caps.className}`}>{skill}</span>
        })}
        <span className='endTriggerClass'></span>
    </div>
  )
}

export default SkillCover