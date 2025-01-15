"use client"
import React from 'react'
import '../MovingText/MovingText.css'

const MovingButton = ({text, color,boxWidth="60px", onClickFunction,id, SelectedCategory}) => {


  return (
    <button className={SelectedCategory===id?'filter_btn_active':"filter_btn"} id={id}  onClick={(e)=>onClickFunction(e.target.id)} >
        <div className='flex_column menu' id={id}  style={{width:boxWidth}}  >
        <h4 className='menuItem1' id={id} onClick={(e)=>onClickFunction(e.target.id)} style={{color:color}}>{text}</h4>
        <h4 className='menuItem2' id={id} onClick={(e)=>onClickFunction(e.target.id)} style={{color:color}}>{text}</h4>
        </div>
    </button>
  )
}

export default MovingButton