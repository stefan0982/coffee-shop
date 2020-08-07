import React from 'react'

import Layout            from '../components/layout'
import SEO               from '../components/seo'
import { graphql }       from 'gatsby'
import BackgroundSection from '../components/Globals/BackgroundSection'
import Info              from '../components/Home/Info'
import Menu              from '../components/Home/Menu'
import Products          from '../components/Home/Products'
import Contact           from '../components/Home/Contact'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <BackgroundSection
        img={ data.img.childImageSharp.fluid }
        title="regular stefan's"
        styleClass="default-background"
      />
      <Info/>
      <Menu items={data.menu}/>
      <Products/>
      <Contact />
    </Layout>
  )
}

export const query = graphql`
    {
        img:file(relativePath:{eq:"default-background.jpeg"}) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }

        menu: allContentfulCoffeeItem {
            edges {
                node {
                    id
                    price
                    title
                    description {
                        description
                    }
                    category
                    image {
                        fixed(width: 50, height: 50) {
                            ...GatsbyContentfulFixed
                        }
                    }
                }
            }
        }
    }
`

export default IndexPage
