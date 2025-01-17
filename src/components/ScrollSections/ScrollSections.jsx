import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Six_Caps } from "next/font/google";
import Link from "next/link";
import "./ScrollSections.css";
import { data } from "@/utils/Projects_data";
gsap.registerPlugin(ScrollTrigger);
const six_Caps = Six_Caps({ subsets: ["latin"], weight:["400"] });

const ScrollSections = () => {
  let [arr,setArr]=useState([])
  useEffect(() => {
    if(arr.length>0){
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
    }

  }, [arr]);

  function getRandomItem(arr,n) {
    if (arr.length === 0 || n <= 0 || n > arr.length) {
      return []; // Handle empty array, invalid n, or n exceeding array length
    }
  
    // Create a copy of the array to avoid modifying the original
    const shuffledArray = [...arr];
  
    // Shuffle the array using Fisher-Yates shuffle
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    let randomarr= shuffledArray.slice(0, n);
    setArr(randomarr)
  }
  


  useEffect(()=>{
    getRandomItem(data,5)
  },[])
  if(arr.length<1){return null}
  return (
    <div className="flex_column width100">
    {arr.map((project, index) => (
      <Link 
      id={`section${index+1}`} 
        key={index} 
        href={`projects/${project.id}`} 
        className={`width100 ${index === 4 ? 'LastSection' : 'section'}`} 
        style={index === 4 ? { height: "80vh", width: "100%", marginTop: "5rem",backgroundImage:`url(${project.img})` } : {backgroundImage:`url(${project.img})`}} 
      >
        <div className={`scroll_section_text flex_row_spaced_between`}>
          <h2>{project.name}</h2>
          <div className="flex_row gap1rem">
              <span >{project.type}</span>
              <span >{project.category}</span>
          </div>
        </div>
      </Link>
    ))}
  </div>
  );
};

export default ScrollSections;
