import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ParallexScroll.css";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);

const ParallaxEffect = ({data, givenStyle}) => {
  const random = Math.random()



  return (
    <div key={random} className={"parallax_container wrap "}>
    {data.length>0?<>
    {data.map((obj,i)=>{ return  <div key={i}    className={` parallax_box` } >
        <Link href={`/projects/${obj.id}`}>
        <div className="parallax_box_image width100">
        <img src={obj.img}/>
        </div>

        <div className="flex_column  parralex_effect_text"> 
          <div className="flex_row_spaced_between width100">
          <h3 className="obj_name black_text bold">{obj.name}</h3>
          <span className="obj_type black_text">{obj.type}</span>
          </div>
 
        <p className="width100"style={{color:"black",textAlign:"left"}}>Lorem, ipsum dolor sit amet ucimus quod.</p>

        </div>
        </Link>
      </div>

    })}</>
  :<h2 className="width100 flex_row " style={{color:"black",opacity:0.4, margin:"2rem"}}>No Project for this category</h2>
  }
  </div>
  );
};

export default ParallaxEffect;
