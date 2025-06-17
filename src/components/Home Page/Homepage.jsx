import React from "react"
import farlightVideo from "../../assets/HomepageIntro.mp4"
import "../Home Page/Homepage.module.style.css"

export default function Homepage(){
    return(
        <>
        <video
        autoPlay
        loop
        muted
        playsInline
        className="background-video"
      >
        <source src={farlightVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        </>
    )
}