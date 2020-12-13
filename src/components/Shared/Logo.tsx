import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Img from 'gatsby-image'

function Image() {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 400) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
    }
  `)

  if (!data?.placeholderImage?.childImageSharp?.fixed) {
    return <div>Picture not found</div>
  }

  console.log(data)

  // return <img src={data.placeholderImage.childImageSharp.fixed.base64} />
  return <Img  fixed={data.placeholderImage.childImageSharp.fixed} />
}

export default Image
