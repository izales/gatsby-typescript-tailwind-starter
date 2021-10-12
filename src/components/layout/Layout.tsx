import React, { ReactNode } from "react"
import Footer from "@components/footer/Footer"
import { StaticImage } from "gatsby-plugin-image"

import "./Layout.scss"

interface ILayoutProps {
  children: ReactNode
}

const Layout = ({ children }: ILayoutProps): JSX.Element => {
  return (
  <div className="mb-cloud  w-screen h-screen ">  
  <div>{children}</div>
  
  </div>
  )
}

export default Layout
