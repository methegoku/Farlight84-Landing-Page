import React from "react"
import farlightVideo from "../../assets/HomepageIntro.mp4"
import "../Home Page/Homepage.module.style.css"

const Hero =  () => {
    return(
      
        <div className="hero-container">
          <div className="background-video-wrapper">
            <video
            autoPlay
            loop
            muted
            playsInline
            className="background-video">

            <source src={farlightVideo} type="video/mp4" />
            Your browser does not support the video tag.
            </video>
            
          </div>
          
          <div className="home-info">
            <h1>Drop Into Chaos. Fight for Glory!</h1>
            <p>Squad up and dominate the wastelands in this high-speed hero shooter.</p>
            <div className="button-group">
              <button className="download">Download Now</button>
              <button className="trailer">Watch Trailer</button>
            </div>
          </div>
        </div>
    )
}

export default Hero;