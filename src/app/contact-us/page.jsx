"use client"
import React, {useEffect, useState} from 'react'
import Navbar from '@/components/Navbar/Navbar'
import { gsap } from 'gsap';
import styles from '@/app/page.module.css'
import StrechtText from '@/components/StrechtText/StrechtText'
import MovingText from '@/components/MovingText/MovingText'
import DownStretchText from '@/components/DownStrechText/DownStrechTExt'
import {useCursorStore} from '@/store/store'
import Footer from '@/components/Footer/Footer';
import pageStyles from '@/app/contact-us/page.module.css'
import { Six_Caps } from "next/font/google";
import ContactSection from '@/components/ContactSection/ContactSection';
import {validationSchema} from '@/utils/Contact_validation'
import Backbtn from '@/components/BackBtn/Backbtn';
import { useRouter } from 'next/navigation';
const six_Caps = Six_Caps({ subsets: ["latin"], weight:["400"] });

const Page = () => {
    let mouseLeaveFunction = useCursorStore((state) => state.setIsProjectHoverFalse)
    let mouseEnterFunction = useCursorStore((state) => state.setIsProjectHoverTrue)
    const router = useRouter();
    const [errors, setErrors] = useState({});
    const [formValues, setFormValues] = useState({ name: '', email: '', projectDetails: '' });
   
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Validate form data
      await validationSchema.validate(formValues, { abortEarly: false });
      setErrors({}); // Clear errors if validation passes

      // Handle form submission logic (e.g., send data to server)
      console.log('Form submitted:', formValues);
    } catch (validationErrors) {
      // Handle validation errors
      const errorMessages = {};
      validationErrors.inner.forEach((error) => {
        errorMessages[error.path] = error.message;
      });
      setErrors(errorMessages);

      console.log(errors,"ee")
    }
  };


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
        <main className={`flex_column gap2rem ${styles.Hero_Section}`}  >
        <div className={`${styles.Hero_container} flex_row`} >
          <StrechtText text="CONTACT" color={"white"}/>
        </div>
        <div className="flex_row">

        <p className={`${styles.hero_subtitle} para_text`} style={{color:"white"}}>WE ARE A CREATIVE STUDIO, SPECIALIZED IN STRATEGY, BRANDING DESIGN, AND DEVELOPEMEnT. OUR WORK IS ALWAYS INTERSECTION OF DESIGN AND TECHNOLOGY.</p>
        </div>
        {/* <div className="flex_row_spaced_between width100 banner_bottom_bar" >
          <a href="#Projects_section" className="flex_row gap1rem ">
        <MovingText color={"white"} text="Scroll to Explore" h4={true} boxWidth="120px" type="scrollToExplore"/>
        <div className="svg_icon" color='white'>
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="currentColor">
          <path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" fill="currentColor"/>
          </svg>
          
          </div>
        </a>
        </div> */}
    </main>


          <div className={`${pageStyles.contact_us} flex_column width100`}>
              <h2 className={`${six_Caps.className} ${pageStyles.lets_talk}`}>LET&#39;S TALK</h2>
              <div className={`flex_column width100 ${pageStyles.parent_to_inputs}`}>

                  <div className={`flex_row width100  wrap gap4rem`}>
                      <div className={` ${pageStyles.input_container}`}>
                          <input type="text" placeholder='what&#39;s Your Name' name="name" onChange={handleInputChange}/>
                          <div className={`${pageStyles.botton_line}`}></div>
                          {errors.name && <p className={`${pageStyles.error_para}`}>{errors.name}</p>}
                      </div>

                      <div className={`width50 ${pageStyles.input_container}`}>
                          <input type="text" placeholder='Your Email' name='email' onChange={handleInputChange}/>
                          <div className={`${pageStyles.botton_line}`}></div>
                          {errors.email && <p className={`${pageStyles.error_para}`}>{errors.email}</p>}

                      </div>
                  </div>
                  
                  <div className={`width100 ${pageStyles.input_container}`}>
                      <input type="text" placeholder='Tell Us About Your Project' name="projectDetails" onChange={handleInputChange}/>
                      <div className={`${pageStyles.botton_line}`}></div>
                      {errors.projectDetails && <p className={`${pageStyles.error_para}`}>{errors.projectDetails}</p>}
                      
                  </div>


                  <button className="btn" href={"/projects"} onClick={handleSubmit}>
                      <MovingText text="Send Message" h3={true} boxWidth="120px" type={"none"} />
                  </button>
              </div>

          </div>

          <ContactSection />

    <div className={`test flex_column gap2rem ${styles.downTextMainContainer}`} onClick={()=>{router.push('/projects');mouseLeaveFunction()}}>
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