'use client'
import React ,{useEffect}from 'react'
import "./PreLoader.css"

export default function PreLoader() {
    useEffect(() => {
      // Delay to show the preloader
      const timer = setTimeout(() => {
        // Hide preloader and show main content
        const preloader = document.getElementById("preloader");
        const mainContent = document.getElementById("main-content");
  
        if (preloader) preloader.style.display = "none";
        if (mainContent) mainContent.style.display = "block";
      }, 1000); // Adjust time as needed
  
      return () => clearTimeout(timer);
    }, []);
  
        return (
            <div id='preloader'>

            <div className='flex_column loader_container' >
                <div className='loader'></div>
              <p className='loader_para'>Please Wait, Content is Loading</p>

            </div>

            </div>

          )
  }
