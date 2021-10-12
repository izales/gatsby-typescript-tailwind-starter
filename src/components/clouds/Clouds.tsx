import React, { ReactNode } from "react"
import { StaticImage } from "gatsby-plugin-image"
import Img from "gatsby-image"
import "./Clouds.scss"


const Clouds = (): JSX.Element => {
  return (
  <div className="  ">  
  
  <StaticImage
        src="../images/wolke.png"
        width={200}
        quality={95}
        formats={["auto", "png"]}
        alt="wolke"
        
        className="m-s z-10 animation"
      />
      
      <StaticImage
        src="../images/wolke.png"
        width={200}
        quality={95}
        formats={["auto", "png"]}
        alt="wolke"
        
        className="m-m z-10 animation-slow"
      />
     <StaticImage
        src="../images/wolke.png"
        width={200}
        quality={95}
        formats={["auto", "png"]}
        alt="wolke"
        
        className="m-l z-10 animation-slow-2"
      />
       <Img   src="../images/vogel.png"/>
      <StaticImage
        src="../images/vogel.png"
        width={150}
        quality={95}
        formats={["auto", "png"]}
        alt="bird"
        
        className="m-l z-10"
      />
       <StaticImage
        src="../images/Bird2.png"
        width={70}
        quality={95}
        formats={["auto", "png"]}
        alt="bird2"
        
        className="m-m z-10"
      />
      <StaticImage
        src="../images/Bird1.png"
        width={70}
        quality={95}
        formats={["auto", "png"]}
        alt="bird"
        
        className="m-s z-10"
      />
   
     
  </div>
  )
}

export default Clouds
