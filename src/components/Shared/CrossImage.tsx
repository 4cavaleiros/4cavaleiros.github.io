import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'

import Img, { GatsbyImageProps } from 'gatsby-image'

const Image = styled(Img)`
  position: absolute!important;
  pointer-events: none;
  right: 0;
  bottom: 0;
  z-index: 0;
  border-bottom-left-radius: ${props => props.theme.shape.borderRadius}px;
  border-bottom-right-radius: ${props => props.theme.shape.borderRadius}px;
` as React.ComponentType<GatsbyImageProps>

type Props = {}

function CrossImage(props: Props) {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "cross.jpg" }) {
        childImageSharp {
          fixed(height: 700) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  if (!data?.placeholderImage?.childImageSharp?.fixed) {
    return <div>Picture not found</div>
  }

  return <Image fixed={data.placeholderImage.childImageSharp.fixed} />
}

export default CrossImage
