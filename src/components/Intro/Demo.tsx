import React from 'react'
import styled from 'styled-components'

import DemoVideoMP4 from '../../assets/video/demo.mp4'
import DemoVideoWebm from '../../assets/video/demo.webm'
import { graphql, useStaticQuery } from 'gatsby'

const Container = styled.div``

const Video = styled.video`
  width: 100%;
  height: 100%;
`

type Props = {}

function Demo(props: Props) {
  const data = useStaticQuery(graphql`
    query {
      fallback: file(relativePath: { eq: "fallback.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Container>
      <Video autoPlay loop controls={false} muted poster={data.fallback.childImageSharp.fluid.src}>
        <source src={DemoVideoMP4} type='video/mp4' />
        <source src={DemoVideoWebm} type='video/webm' />
      </Video>
    </Container>
  )
}

export default Demo
