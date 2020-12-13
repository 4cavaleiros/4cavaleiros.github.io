import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Button, Card, CardContent, Typography, Divider } from '@material-ui/core'

import styled from 'styled-components'
import Img, { GatsbyImageProps } from 'gatsby-image'

import Title from '../Shared/Title'

type Props = {
  background: string
}

const Container = styled.section<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  position: relative;
  background-image: url(${props => props.background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: 70%;
  height: 700px;
  padding: ${props => props.theme.spacing(4)}px;
  ${props => props.theme.breakpoints.down('md')} {
    background-position-x: 55%;
  }
`

const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 14px 24px;
`

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  position: relative;
  z-index: 100;
`

const Icon = styled(Img)`
  margin-right: ${props => props.theme.spacing(1)}px;
` as React.ComponentType<GatsbyImageProps>

const Overlay = styled.div`
  background-color: rgba(255, 255, 255, 0.85);
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`

function Document() {
  const data = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "background.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      puppet: file(relativePath: { eq: "persons/head/puppet.png" }) {
        childImageSharp {
          fixed(height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Container id='document' background={data.background.childImageSharp.fluid.src}>
      <Overlay />
      <Content>
        <Title center variant='h3'>
          Game designer Document
        </Title>
        <Card elevation={4}>
          <Header>
            <Icon fixed={data.puppet.childImageSharp.fixed} />
            <Typography variant='h6'>GDD_4CAVALEIROS_FINAL.pdf</Typography>
          </Header>
          <Divider />
          <CardContent style={{paddingBottom: 16}}>
            <Button
              variant='contained'
              color='primary'
              href='/documents/GDD_4CAVALEIROS_FINAL.pdf'
              target='_BLANK'>
              Download
            </Button>
          </CardContent>
        </Card>
        <br />
      </Content>
    </Container>
  )
}

export default Document
