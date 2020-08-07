import React       from 'react'
import Product     from './Product'
import Title       from '../Globals/Title'
import { graphql, useStaticQuery } from 'gatsby'

const getData = graphql`
    {
        products:allContentfulCoffeeProduct {
            edges {
                node {
                    id
                    title
                    price
                    image{
                        fluid(maxHeight:426) {
                            src
                            ...GatsbyContentfulFluid
                        }
                    }
                }
            }
        }
    }

`

const Products = () => {
  const { products } = useStaticQuery(getData)
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our products"/>
        <div className="row">
          {products.edges.map(({ node:prod }) => (
            <Product key={prod.id} product={prod} />
          )) }
        </div>
      </div>
    </section>
  )
}

export default Products
