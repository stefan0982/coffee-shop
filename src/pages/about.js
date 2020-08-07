import React from 'react'

import Layout            from '../components/layout'
import SEO               from '../components/seo'
import { graphql }       from 'gatsby'
import BackgroundSection from '../components/Globals/BackgroundSection'

const AboutPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="About" />
      <BackgroundSection
        img={ data.img.childImageSharp.fluid }
        title="about us"
        styleClass="about-background"
      />
    </Layout>
  )
}

export const query = graphql`
    {
        img:file(relativePath:{eq:"about-background.jpeg"}) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`

export default AboutPage
