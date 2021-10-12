import React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout/Layout"
import Seo from "../components/seo/Seo"
import "../css/cloud.scss"
import Clouds from "@components/clouds/Clouds"

interface ISiteDataProps {
  frontmatter: IFrontmatterProps
  html: string
}

interface IFrontmatterProps {
  seoTitle: string
  seoDescription: string
}

interface IDataProps {
  siteData: ISiteDataProps
}

export interface IIndexProps {
  data: IDataProps
}

const IndexPage = ({
  data: {
    siteData: {
      frontmatter: { seoDescription, seoTitle },
      html,
    },
  },
}: IIndexProps): JSX.Element => {
  return (
    <Layout>
      <Seo title={seoTitle} description={seoDescription} />
    <Clouds></Clouds>
      
    
    
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query imprintPage {
    siteData: markdownRemark(frontmatter: { pageKey: { eq: "page_index" } }) {
      frontmatter {
        seoTitle
        seoDescription
      }
      html
    }
  }
`
