import React from 'react'
import Img, { GatsbyImageProps } from 'gatsby-image'
import styled from 'styled-components'

import { Grid, Paper as MuiPaper, Container as MuiContainer, Typography } from '@material-ui/core'
import { graphql, useStaticQuery } from 'gatsby'
import { FormattedMessage } from 'react-intl'

import Title from '../Shared/Title'

const Container = styled(MuiContainer)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: relative;
  z-index: 10;
  min-height: 400px;
  overflow: hidden;
  padding: ${props => props.theme.spacing(10)}px 0px;
`

const Circle = styled(MuiPaper)`
  display: flex;
  align-items: center;
  justify-items: center;
  border-radius: 50%;
  margin: auto;
  margin-bottom: 20px;
  max-width: 120px;
  max-height: 120px;
`

export const Image = styled(Img)`
  border-radius: 50%;
  max-width: 120px;
  max-height: 120px;
` as React.ComponentType<GatsbyImageProps>

type Props = {}

const team = {
  leandro: 'Leandro G. Ganth',
  cesar: 'Cesar Augusto',
  rafael: 'Rafael Torres',
  borborema: 'Victor Borborema',
  yuri: 'Yuri Faccioli',
  thiago: 'Thiago Madeira',
}

const members = Object.keys(team)

const elevation = 4

function Team(props: Props) {
  const data = useStaticQuery(graphql`
    query {
      leandro: file(relativePath: { eq: "team/leandro.jpg" }) {
        childImageSharp {
          fixed(width: 240) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      cesar: file(relativePath: { eq: "team/cesar.jpg" }) {
        childImageSharp {
          fixed(width: 240) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      rafael: file(relativePath: { eq: "team/rafael.jpg" }) {
        childImageSharp {
          fixed(width: 240) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      borborema: file(relativePath: { eq: "team/borborema.jpg" }) {
        childImageSharp {
          fixed(width: 240) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      yuri: file(relativePath: { eq: "team/yuri.jpg" }) {
        childImageSharp {
          fixed(width: 240) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      thiago: file(relativePath: { eq: "team/thiago.jpg" }) {
        childImageSharp {
          fixed(width: 240) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Container maxWidth='lg' id='team'>
      <Title center variant='h1'>
        <FormattedMessage id='team.title' defaultMessage='The Team!' />
      </Title>
      <Grid container alignItems='center' justify='center' spacing={4}>
        {members.map(member => (
          <Grid item key={member}>
            <Circle elevation={elevation}>
              <Image fixed={data[member].childImageSharp.fixed} />
            </Circle>
            <Typography variant='body2'>{team[member]}</Typography>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Team
