import React from 'react'
import styled from 'styled-components'

import { Grid, Typography, Container as MuiContainer } from '@material-ui/core'

import { FormattedMessage } from 'react-intl'

import Title from '../Shared/Title'

const Container = styled(MuiContainer)`
  ${props => `
    padding: ${props.theme.spacing(14)}px;
    ${props.theme.breakpoints.down('sm')} {
      padding: ${props.theme.spacing(6)}px;
    }
  `}
`

type HideOnScrollProps = {
  children: React.ReactElement
  target?: HTMLElement | undefined
}

function About() {
  return (
    <Container id='about'>
      <Title center variant='h1'>
        <FormattedMessage id='about.title' defaultMessage='About the Game' />
      </Title>
      <Grid container spacing={6}>
        <Grid item sm={12} md={6}>
          <Title variant='h4'>
            <FormattedMessage id='about.story' defaultMessage='Story...' />
          </Title>
          <Typography variant='body1'>
            <FormattedMessage id='about.column1' defaultMessage='column1' />
          </Typography>
        </Grid>
        <Grid item sm={12} md={6}>
          <Typography variant='body1'>
            <FormattedMessage id='about.column2' defaultMessage='column2' />
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default About
