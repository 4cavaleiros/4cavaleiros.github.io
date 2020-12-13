import React from 'react'
import styled from 'styled-components'

import Img from 'gatsby-image'

import SEO from '../components/Shared/Seo'
import Title from '../components/Shared/Title'
import Layout from '../components/Shared/Layout'

import { Props } from './index'
import { Typography } from '@material-ui/core'
import { graphql, useStaticQuery } from 'gatsby'

const Container = styled.section`
  margin-top: 100px;
  > div > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 100px;
    border-radius: 44px;
    height: 800px;
  }
`

const Description = styled(Typography)`
  z-index: 1000;
`

function NotFoundPage(props: Props) {
  const lang = props.pageContext.langKey
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "persons/head/baal.png" }) {
        childImageSharp {
          fixed(width: 144) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Container>
      <Layout lang={lang}>
        <SEO title='404: Not found' lang={lang} />
        <Img fixed={data.placeholderImage.childImageSharp.fixed} />
        <Title center variant='h1'>404: Not Found</Title>
        <Description variant='h5'>You just hit a route that doesn&#39;t exist... the sadness.</Description>
      </Layout>
    </Container>
  )
}

export default NotFoundPage
