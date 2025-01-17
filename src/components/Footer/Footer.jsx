

import React from 'react'
import {scrollToTop} from  '@/utils/scrollToTop'
import MovingText from "@/components/MovingText/MovingText";

const Footer = ({color}) => {
  return (
    <div className={`flex_column gap1rem`} >
    <div className={`flex_row_spaced_between width100`} >
    <div className="flex_row" onClick={scrollToTop}>
      <div className="svg_icon"  style={{color:color}}>
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 7C12.2652 7 12.5196 7.10536 12.7071 7.29289L19.7071 14.2929C20.0976 14.6834 20.0976 15.3166 19.7071 15.7071C19.3166 16.0976 18.6834 16.0976 18.2929 15.7071L12 9.41421L5.70711 15.7071C5.31658 16.0976 4.68342 16.0976 4.29289 15.7071C3.90237 15.3166 3.90237 14.6834 4.29289 14.2929L11.2929 7.29289C11.4804 7.10536 11.7348 7 12 7Z" fill="currentColor"/>
        </svg>
          </div>
          <MovingText color={color} text="Back Top" h4={true} boxWidth="130px" type="none"/>
      </div>
    

{/*     
      <div className="flex_row">
      <MovingText color={color} text="Follow Me" h4={true} boxWidth="130px" type="none"/>
        <div className="svg_icon" style={{color:color}}>
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M14 6C14 3.79086 15.7909 2 18 2C20.2091 2 22 3.79086 22 6C22 8.20914 20.2091 10 18 10C16.7961 10 15.7164 9.46813 14.9831 8.62655L9.91209 11.1621C9.96969 11.4323 10 11.7126 10 12C10 12.2874 9.96969 12.5678 9.91208 12.838L14.9831 15.3735C14.9831 15.3735 16.7961 14 18 14C20.2091 14 22 15.7909 22 18C22 20.2091 20.2091 22 18 22C15.7909 22 14 20.2091 14 18C14 17.7126 14.0303 17.4322 14.0879 17.162L9.01694 14.6265C8.28363 15.4681 7.20393 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C7.20395 8 8.28367 8.53191 9.01698 9.37354L14.0879 6.83807C14.0303 6.56781 14 6.28744 14 6Z" fill="currentColor"/>
        </svg>
        </div>
      </div> */}

    </div>

      <div style={{color:color}}>
        <h4>2024 &copy; Zeeshan. All rights reserved.</h4>
      </div>
    </div>
  )
}

export default Footer