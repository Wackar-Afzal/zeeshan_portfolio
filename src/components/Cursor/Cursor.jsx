"use client"
import React from 'react'
import {useCursorStore} from '@/store/store'

import { useEffect, useState } from 'react';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const isHovered = useCursorStore((state) => state.isHovered)
  const isMenu = useCursorStore((state) => state.isMenu)
  const {status,positions} = useCursorStore((state) => state.isScrollToExplore)
  const isStudio = useCursorStore((state) => state.isStudio)
  const isProject = useCursorStore((state) => state.isProject)
  const isBurger = useCursorStore((state) => state.isBurger)
  var width
  if (typeof window !== 'undefined') {
     width = window.innerWidth;
    // Use `width` as needed
    // console.log(width)
  }
  
    useEffect(() => {

        const handleMouseMove = (e) => {
          if(!status){
             setPosition({ x: e.clientX, y: e.clientY });
            }
          };

        document.addEventListener('mousemove', handleMouseMove);
        return () => {
          document.removeEventListener('mousemove', handleMouseMove);
        };
      });

    useEffect(()=>{
    if(status==true){
      const cursor = document.getElementById('cursor');
        cursor.style.left = `${positions.x - 9}px`; // Relative to the viewport
        cursor.style.top = `${positions.y - 7}px`;  // Relative to the viewport
      setPosition({ x: positions.x, y: positions.y });
    }
    },[status,positions])
      const circleClasses = `circle flex_row   ${isHovered ? "hovered_circle flex_row" : ''}`;
  return (
    <div
    id="cursor"
      className={circleClasses}
      style={isMenu===true ?
        {
        left: `${width-92}px`,
        top: `10px`,
        transform: 'scale(1.2)',
        border:`1.5px solid rgb(140,97,68)`,
        transition: 'left 1s ease, top 1s ease, transform 0.75s ease',

      }:status?{
        transform: 'scale(1.25)',
        border:`2px solid grey`,
        transition: 'left 1s ease, top 1s ease, transform 0.75s ease',
      }:isStudio===true?{
        left: `${position.x}px`,
        top: `${position.y}px`,
        border:`none`,
        backgroundColor:"rgba(255,255,255,0.2)",
        transform: 'scale(2.75)',
        backdropFilter: "blur(12px)",
      }:isProject===true?{
        left: `${position.x}px`,
        top: `${position.y}px`,
        border:`none`,
        backgroundColor:"rgba(255,255,255,0.2)",
        transform: 'scale(2.75)',
        backdropFilter: "blur(12px)",
      }
      :
      {
        left: `${position.x}px`,
        top: `${position.y}px`,
        border:`2px solid grey`,
      }}
    >
      {isStudio?<h4 style={{fontSize:"0.3rem",fontWeight:"700"}}>[About ME]</h4>:isProject===true?<h4 style={{fontSize:"0.3rem", fontWeight:"700"}}>[Go To]</h4>:null}
    </div>
  )
}

export default Cursor