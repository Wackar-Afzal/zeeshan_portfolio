import React, { useEffect, useState } from "react";
import "./ParallexScroll.css";
import Link from "next/link";

const ParallaxEffect = ({data}) => {

  return (
    <div  className={"parallax_container wrap "}>
    {data.length>0?<>
    {data.map((obj,i)=>{ return  <div key={i}    className={` parallax_box` } >
        <Link href={`/projects/${obj.id}`}>
        <div className="parallax_box_image width100">
        <img src={obj.img} alt="project"/>
        </div>

        <div className="flex_column  parralex_effect_text"> 
          <div className="flex_row_spaced_between width100">
          <h3 className="obj_name black_text bold">{obj.name}</h3>
          <span className="obj_type black_text">{obj.type}</span>
          </div>
 
        <p className="width100"style={{color:"black",textAlign:"left"}}>{obj.subHeading}</p>

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
    // <div className="">
    // <div className="flex_column width100" >
    //   <Link href="/projects/3" className="section width100" id="section1"> 
    //     <div  className={`scroll_section_text flex_row_spaced_between`}>
    //       <h2>Fitness App</h2>
    //     <div className="flex_row gap1rem">
    //       <span>FitTech</span>
    //       <span>Case Study</span>
    //     </div>
    //     </div>
    //   </Link>
    //   <Link href="/projects/1"className="section width100"   id="section2">
    //   <div  className={`scroll_section_text flex_row_spaced_between`}>
    //       <h2>Study Sync</h2>
    //     <div className="flex_row gap1rem">
    //       <span>EdTech</span>
    //       <span>Case Study</span>
    //     </div>
    //     </div>
    //   </Link>
    //   <Link href="/projects/4" className="section width100"   id="section3">
    //   <div  className={`scroll_section_text flex_row_spaced_between`}>
    //       <h2>Violet</h2>
    //     <div className="flex_row gap1rem">
    //       <span>Fintech</span>
    //       <span>Web Design</span>
    //     </div>
    //     </div>

    //   </Link>
    //   <Link href="/projects/2" className="section width100"   id="section4">
    //   <div  className={`scroll_section_text flex_row_spaced_between`}>
    //       <h2>PETS MAZE</h2>
    //     <div className="flex_row gap1rem">
    //       <span>PetTech</span>
    //       <span>Case Study</span>
    //     </div>
    //     </div>

    //   </Link>
    // <Link href="/projects/6" className="LastSection width100" style={{height:"80vh", width:"100%", marginTop:"14rem"}}>
    // {/* <span  className={`scroll_section_text `} style={{color:"white", zIndex:11}}>GLOBAL PAY</span> */}
    // <div  className={`scroll_section_text flex_row_spaced_between`}>
    //       <h2>AI Platform</h2>
    //     <div className="flex_row gap1rem">
    //       <span>Tech</span>
    //       <span>Web Design</span>
    //     </div>
    //     </div>
    // </Link>

    // </div>

    // </div>