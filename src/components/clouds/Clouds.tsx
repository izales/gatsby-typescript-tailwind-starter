import React, { ReactNode } from "react"
import { StaticImage } from "gatsby-plugin-image"

import "./Clouds.scss"

interface ILayoutProps {
  children: ReactNode
}

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
        
        className="m-xs z-10 animation-slow-2"
      />
  </div>
  )
}

export default Clouds
