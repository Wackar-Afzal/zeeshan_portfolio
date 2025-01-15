"use client"
import React, {useEffect, useState} from 'react'
import Navbar from '@/components/Navbar/Navbar'
import { gsap } from 'gsap';
import styles from '@/app/page.module.css'
import StrechtText from '@/components/StrechtText/StrechtText'
import DownStretchText from '@/components/DownStrechText/DownStrechTExt'
import {useCursorStore} from '@/store/store'
import Footer from '@/components/Footer/Footer';
import ContactSection from '@/components/ContactSection/ContactSection';
import Backbtn from '@/components/BackBtn/Backbtn';
import { useRouter } from 'next/navigation';

const Page = () => {
    let mouseLeaveFunction = useCursorStore((state) => state.setIsProjectHoverFalse)
    let mouseEnterFunction = useCursorStore((state) => state.setIsProjectHoverTrue)
    const router = useRouter();

    useEffect(() => {
        // Select all span elements within .hero-title and animate them
        // Get all span elements
        const spans = document.querySelectorAll(".hero-title span");
        // Animate each span with irregular timing
        spans.forEach((span, index) => {
          // Apply a unique delay for each span
          gsap.fromTo(
            span, 
            { scaleY: 0 }, // Initial state: collapsed
            { 
              scaleY: 1, // Final state: expanded
              duration:1, // Random duration between 2s and 5s
              ease: "power4.out", // Easing function
              delay: index===0 ?0.1:index===1 ?0.2:index===3 ?0:index===4 ?0.2:index===5 ?0.3:0, // Random delay before starting animation
              transformOrigin: "bottom center" // Ensure scaling from the bottom
            }
          );
        });
       
      }, []);


      useEffect(()=>{
        const t1 = gsap.timeline();
        const t2 = gsap.timeline();
    
        t1.fromTo(
          ".banner_bottom_bar", 
          { y: '20vh', opacity: 0 }, // Initial state: below the viewport
          { 
            y: '0vh', // Final state: in the viewport
            opacity: 1,
            duration: 3, // Duration of the animation
            ease: "power4.out" // Easing function
          }
        );
        
        // Add a delay of 5 seconds before starting the animation
        t2.fromTo(
          ".para_text", 
          { y: '20vh', opacity: 0 }, // Initial state: below the viewport
          { 
            y: '0vh', // Final state: in the viewport
            opacity: 0.4,
            duration: 3, // Duration of the animation
            ease: "power4.out" // Easing function
          }
        );
    
        t1.delay(0.45);
        t2.delay(0.85);
    
        
        // Add a delay of 5 seconds before starting the animation
      },[])
    
  return (
    <div className='dark_background site_padding' >
        <Navbar type="white"/>
        <Backbtn color="white"/>
        <main className={"flex_column gap2rem"} style={{paddingTop:"5rem"}} >
        <div className={`${styles.Hero_container} flex_row`} >
        <StrechtText text="M.ZEESHAN" color="white"/>
        </div>
        {/* <div className="flex_row">

        <p className={`${styles.hero_subtitle} para_text`}>I&#39;m a Senior Product Designer with 10+ years of experience in creating impactful user experiences and building 9 startups from the ground up. My expertise includes leading design teams, user research, and product architecture, with a strong focus on design strategy and user-centered design. I am committed to combining creativity with technical skills to deliver high-quality, ethical, and accessible design solutions.</p>
        </div> */}
    </main>

    <div style={{width:"100%", padding:"5rem 2rem 2rem 2rem"}} className='flex_column '>
    <h2 style={{textAlign:"left"}}>My journey</h2>

    <p className={`${styles.hero_subtitle} para_text `} style={{color:"white",textAlign:"left"}}>
        My journey into the world of design began in 2005, sparked by a fascination with the small details that others often overlooked—misaligned text, clashing colors, and branding that felt out of sync. Even at a young age, these inconsistencies piqued my curiosity. Why did some designs feel harmonious while others seemed disjointed? Driven by a desire to understand, I started asking questions and experimenting on my own.
<br/><br/>At the time, I was equipped with nothing more than Adobe 7, a software that was just beginning to reveal the possibilities of digital design. I spent countless hours tinkering with the program, striving to create balance and coherence in my designs. These early experiments were more than just practice; they laid the foundation for my understanding of design principles.
<br/><br/>As I grew, so did my skills. My passion for design blossomed into a full-fledged career, where my early attention to detail became one of my most valuable assets. I began applying this keen eye for alignment and color to larger projects, eventually leading to significant roles in various companies. The achievements I&#39;ve made, from leading design teams to shaping entire visual identities, can be traced back to those first moments of creative exploration.
<br/><br/>My journey wasn&#39;t just about mastering tools or techniques; it was about overcoming challenges and constantly pushing the boundaries of what was possible in design. Over the years, my work has spanned multiple industries, from healthcare to fitness and beyond, each time bringing a blend of creativity and technical expertise to deliver high-quality solutions. My contributions at companies like Mailmunch, where I helped achieve product-market fit with a significant revenue increase, and Emerging Health International, where I revolutionized healthcare delivery through intuitive design, reflect my growth from a curious beginner to a seasoned expert.
<br/><br/>Today, as a Senior Product Designer with over 10 years of experience, I continue to blend creativity with strategic thinking, leading design teams, mentoring young designers, and pushing the envelope in user experience and interface design. My journey is a testament to the power of curiosity, persistence, and an unwavering commitment to excellence.


        </p>

    </div>

   
          <ContactSection />

    <div className={`test flex_column ${styles.downTextMainContainer}`} onClick={()=>{router.push('/projects');mouseLeaveFunction()}}>
      <p className={`${styles.DownText_heading, styles.hero_subtitle_skill_section}`}>INTERESTED TO DISCOVER MORE OF MY WORK ?</p>
      <div className={`flex_row gap2rem `} onMouseEnter={mouseEnterFunction} onMouseLeave={mouseLeaveFunction}>
      <DownStretchText text="PROJECTS"  color="white"/>
      </div>
    </div>

    <Footer color={"white"} />
</div>
  )
}

export default Page