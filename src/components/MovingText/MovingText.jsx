"use client"
import React,{forwardRef} from 'react'
import './MovingText.css'
import {useCursorStore,} from '@/store/store'

const MovingText = forwardRef(({text, span, h1,h2, h3, h4, h5, color,boxWidth="75px", type,iconposition},ref) => {

  // console.log('SVG Position:', iconposition,text);
  
      // Call all hooks at the top level
  const setMenuHoverTrue = useCursorStore((state) => state.setMenuHoverTrue)
  const setMenuHoverFalse = useCursorStore((state) => state.setMenuHoverFalse)
  const setIsScrollToExploreHoverTrue = useCursorStore((state) => state.setIsScrollToExploreHoverTrue)
  const setIsScrollToExploreHoverFalse = useCursorStore((state) => state.setIsScrollToExploreHoverFalse)

  let mouseEnterFunction=()=>{
    if (type === "menu") {
      setMenuHoverTrue();
    } else if (type === "scrollToExplore") {
       setIsScrollToExploreHoverTrue(iconposition);
    }
  }
  let mouseLeaveFunction=()=>{
    if (type === "menu") {
       setMenuHoverFalse();
    } else if (type === "scrollToExplore") {
    setIsScrollToExploreHoverFalse();
    } 
  
  };

  // Use the results of the hooks conditionally
  


  return (
    <div className='menu flex_column' onMouseEnter={()=>mouseEnterFunction()} onMouseLeave={()=>mouseLeaveFunction()} style={{width:boxWidth}}>
        {span?
        <>
            <span className='menuItem1' style={{color:color}}>{text}</span>
            <span className='menuItem2' style={{color:color}}>{text}</span>
        </>
        :
        h1?
        <>
        <h1 className='menuItem1' style={{color:color}} >{text}</h1>
        <h1 className='menuItem2' style={{color:color}} >{text}</h1>
        </>:
        h2?
        <>
        <h2 className='menuItem1' style={{color:color}}>{text}</h2>
        <h2 className='menuItem2' style={{color:color}}>{text}</h2>
        </>:
         h3?
         <>
         <h3 className='menuItem1' style={{color:color}}>{text}</h3>
         <h3 className='menuItem2' style={{color:color}}>{text}</h3>
         </>:
          h4?
          <>
          <h4 className='menuItem1'style={{color:color}}>{text}</h4>
          <h4 className='menuItem2'style={{color:color}}>{text}</h4>
          </>:
            h5?
            <>
            <h5 className='menuItem1'style={{color:color}}>{text}</h5>
            <h5 className='menuItem2'style={{color:color}}>{text}</h5>
            </>:
        null
        }
    </div>
  )
})
MovingText.displayName ="MovingText"
export default MovingText