import React from 'react'
import styled from 'styled-components'
import Title from '../Shared/Title'
import { graphql, useStaticQuery } from 'gatsby'

const Container = styled.section`
  height: 500px;
`

type Props = {}

function Persons(props: Props) {
  const data = useStaticQuery(graphql`
    query {
      death: file(relativePath: { eq: "persons/death.png" }) {
        childImageSharp {
          fixed(width: 524) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      conquest: file(relativePath: { eq: "persons/conquest.png" }) {
        childImageSharp {
          fixed(width: 245) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      war: file(relativePath: { eq: "persons/war.png" }) {
        childImageSharp {
          fixed(width: 358) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      famine: file(relativePath: { eq: "persons/famine.png" }) {
        childImageSharp {
          fixed(width: 318) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Container id='persons'>
      <Title center clockwise variant='h1'>
        Persons
      </Title>
    </Container>
  )
}

export default Persons
