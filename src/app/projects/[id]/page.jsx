"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { projectData } from "@/utils/Projects_data";
import useInView from "@/utils/UseInView";
import styles from "./page.module.css";
import Backbtn from "@/components/BackBtn/Backbtn";

const Page = () => {
  const { id } = useParams();
  const data = projectData.filter((obj) => obj.id == id)[0];
  const [project, setProject] = useState(data);
  const [loading, setLoading] = useState(true); // Track loading state for the first image
  const length = project.imgs.length;

  // Initialize refs array and visibility states array
  const [refs, isInView] = useInView({ threshold: [0, 0.5, 1] });

  // Handle first image load
  const handleFirstImageLoad = () => {
    setLoading(false);
  };

  // Fallback to hide the loader after a timeout
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 5000); // Adjust the timeout as needed
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <div className="backbtn">
        <Backbtn color={project.backbtn} />
      </div>
      {loading ? (
        <div className={styles.loader}><div></div></div> // Loader component
      ) : (
        <div
          key={id}
          className={`flex_column site_padding ${styles.image_container}`}
          style={{
            backgroundColor: project.bg_color,
            paddingTop: "4rem",
            paddingBottom: "4rem",
          }}
        >
          {project.imgs.map((obj, i) => {
            return (
              <div
                ref={(el) => (refs.current[i] = el)} // Assign ref for each element
                key={i}
                style={{
                  borderRadius:
                    i === 0
                      ? "1.2rem 1.2rem 0rem 0rem"
                      : i === length - 1
                      ? "0rem 0rem 1.2rem 1.2rem"
                      : 0,
                }}
              >
                <img
                  className={
                    isInView[i]
                      ? `${styles.in_view}`
                      : `${styles.out_view}`
                  }
                  src={obj}
                  alt={`Project image ${i + 1}`}
                  onLoad={i === 0 ? handleFirstImageLoad : null} // Only handle the first image
                  onError={i === 0 ? handleFirstImageLoad : null} // Handle errors for the first image
                />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Page;
