import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Img, { GatsbyImageProps } from 'gatsby-image'
import styled from 'styled-components'

const ImageStyled = styled(Img)`
  // display: flex!important;
  // align-items: center;
  // justify-content: center;
  // flex-direction: column;
  // margin: auto;
  ${props => props.theme.breakpoints.down('md')} {
    img {
      max-width: 300px;
      margin: auto;
      left: 0;
      right: 0;
    }
  }
` as React.ComponentType<GatsbyImageProps>

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

  return <ImageStyled imgStyle={{objectFit: 'contain'}} fixed={data.placeholderImage.childImageSharp.fixed} />
}

export default Image
