import React from 'react'
import styled from 'styled-components'

import { Button, Typography } from '@material-ui/core'
import { FormattedMessage } from 'react-intl'

import Title from '../Shared/Title'

const Container = styled.section`
  height: 500px;
  text-align: center;
  button,
  a {
    position: relative;
    z-index: 1000;
  }
`

type Props = {}

function Contact(props: Props) {
  return (
    <Container id='contact'>
      <Title center variant='h1'>
        <FormattedMessage id='contact.title' defaultMessage='Contact' />
      </Title>
      <Button
        href='mailto:cesardeazevedo@outlook.com'
        size='large'
        variant='contained'
        color='primary'>
        <FormattedMessage id='contact.button' defaultMessage='Contact!' />
      </Button>
    </Container>
  )
}

export default Contact
