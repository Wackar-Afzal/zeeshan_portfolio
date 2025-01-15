"use client"
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { projectData } from "@/utils/Projects_data";
import useInView from '@/utils/UseInView';
import styles from './page.module.css'
import { useRouter } from 'next/navigation';
import Backbtn from '@/components/BackBtn/Backbtn';
const Page = () => {
  const { id } = useParams();
  const router = useRouter();
  const data = projectData.filter((obj, i) => obj.id == id)[0]
  const [project, setProject] = useState(data);
  const length = project.imgs.length;

  // Initialize refs array and visibility states array
  const [refs, isInView] = useInView({ threshold: [0, 0.5, 1]});

  // useEffect(() => {
  //   // Handle any side effects related to visibility changes here if needed
  // }, [isInView]);

  return (
    <>
    <div className="backbtn">
    <Backbtn color={project.backbtn}/>
    </div>
    <div key={id} className={`flex_column site_padding ${styles.image_container}`} style={{ backgroundColor: project.bg_color, paddingTop: "4rem", paddingBottom: "4rem" }}>
      {project.imgs.map((obj, i) => {
        return (
          <div
            ref={(el) => refs.current[i] = el} // Assign ref for each element
            key={i}
            style={{ borderRadius: i === 0 ? "1.2rem 1.2rem 0rem 0rem" : i === length - 1 ? "0rem 0rem 1.2rem 1.2rem" : 0 }}
          >
            <img className={isInView[i]?`${styles.in_view}`:`${styles.out_view}`} key={i} src={obj} alt={`Project image ${i + 1}`} />
          </div>
        );
      })}
{/* <button onClick={() => router.back()} style={{width:"2.5rem",height:"2.5rem"}}  className="backbtn">
<svg viewBox="0 0 1024 1024" fill="#000000" width="100%" height="100%">
  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
  <g id="SVGRepo_iconCarrier">
    <path fill="#000000" d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"></path>
    <path fill="#000000" d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"></path>
  </g>
</svg>


</button> */}

    </div>
    </>
  );
};

export default Page;
