"use client"
import { Six_Caps } from "next/font/google";

import "./StrechtText.css"
import { useEffect } from 'react';
import { gsap } from 'gsap';
const six_Caps = Six_Caps({ subsets: ["latin"], weight:["400"] });

const HeightTitles = ({text , color}) => {



  useEffect(() => {
    function generateSpans(selector) {
      const elements = document.querySelectorAll("h1.hero-title");
    //   console.log(elements,"elements")
      elements.forEach((element) => {
        const text = element.textContent.trim();
        const words = text.split(' ');

        let finalHTML = ''; // Empty span at the beginning

        words.forEach((word, index) => {
          finalHTML += '<div>'; // Open a div for each word
          for (let i = 0; i < word.length; i++) {
            finalHTML += `<span className="span-${i}">${word[i]}</span>`; // Wrap each letter in a span
          }
          finalHTML += '</div>'; // Close the div for each word

          if (index !== words.length - 1) {
            finalHTML += `<div><span></span></div>`; // Empty span and a div between words
          }
        });

        finalHTML += ''; // Empty span at the end

        element.innerHTML = finalHTML;
      });
    }

    generateSpans('.height-title .hero-title');
    generateSpans('.height-title .next-hero-title');
    generateSpans('.height-title .slide-hero-title');
    generateSpans('.fixed-title');

    function applyHoverEffect(selector) {
      const spans = document.querySelectorAll("h1.hero-title span");
    //   console.log(spans,"spans")

      spans.forEach((span) => {
        span.originalScaleY = 1;
        span.addEventListener('mousemove', handleMouseMove);
      });

      function handleMouseMove(e) {
        const hoveredSpan = e.target;
        const rect = hoveredSpan.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const scaleFactor = 0.2;

        const center = rect.width / 2;
        let scale;

        if (mouseX < center) {
          scale = (scaleFactor + 1) + (scaleFactor * mouseX) / center;
        } else {
          scale = (scaleFactor + 1) + (scaleFactor * (rect.width - mouseX)) / center;
        }

        gsap.to(hoveredSpan, {
          scaleY: scale,
          duration: 0.5,
          ease: 'power4.out',
        });

        const spansArray = Array.from(spans);
        const hoveredIndex = spansArray.indexOf(hoveredSpan);

        const prevSpan = spansArray[hoveredIndex - 1];
        const nextSpan = spansArray[hoveredIndex + 1];

        if (prevSpan) {
          let distanceFromMouse = Math.abs(rect.left - e.clientX);
          distanceFromMouse = Math.min(distanceFromMouse, center);

          const scalePrev = 1 + (scaleFactor * (center - distanceFromMouse)) / center;
          gsap.to(prevSpan, {
            scaleY: scalePrev,
            duration: 0.5,
            ease: 'power4.out',
          });
        }

        if (nextSpan) {
          let distanceFromMouse = Math.abs(rect.right - e.clientX);
          distanceFromMouse = Math.min(distanceFromMouse, center);

          const scaleNext = 1 + (scaleFactor * (center - distanceFromMouse)) / center;
          gsap.to(nextSpan, {
            scaleY: scaleNext,
            duration: 0.5,
            ease: 'power4.out',
          });
        }
      }

      spans.forEach((span) => {
        span.addEventListener('mouseleave', handleMouseLeave);
      });

      function handleMouseLeave() {
        spans.forEach((span) => {
          gsap.to(span, {
            scaleY: span.originalScaleY,
            duration: 0.5,
            ease: 'power4.out',
          });
        });
      }

      return () => {
        spans.forEach((span) => {
          span.removeEventListener('mousemove', handleMouseMove);
          span.removeEventListener('mouseleave', handleMouseLeave);
        });
      };
    }

    const heroTitleCleanup = applyHoverEffect('.height-title .hero-title span');
    const nextHeroTitleCleanup = applyHoverEffect('.height-title .next-hero-title span');
    const slideHeroTitleCleanup = applyHoverEffect('.height-title .slide-hero-title span');

    return () => {
      heroTitleCleanup();
      nextHeroTitleCleanup();
      slideHeroTitleCleanup();
    };
  }, []);

  

  return (
    <>
    <h1 className={`hero-title caption-timeline primary-font-title site_padding  ${six_Caps.className}` } style={{color:color}}><span>{text}</span></h1>
    
    </>
  );
};

export default HeightTitles;
