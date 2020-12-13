import React from 'react'
import styled from 'styled-components'

import { Typography } from '@material-ui/core'
import { HeaderButton } from './Styles'

import Language from './Language'
import { LangKeys } from '../../pages'
import useScreen from '../../hooks/useScreen'

const Container = styled.header`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.2);
  padding: ${props => props.theme.spacing(0.5)}px;
  padding-left: ${props => props.theme.spacing(4)}px;
  padding-right: ${props => props.theme.spacing(4)}px;
  width: 100%;
  color: white;
  z-index: 10000;
`

type Props = {
  lang: LangKeys
}

function Header(props: Props) {
  const isMobile = useScreen('sm')
  return (
    <Container>
      {!isMobile && (
        <HeaderButton href='/documents/GDD_4CAVALEIROS_FINAL.pdf' target='_BLANK'>
          <Typography variant='body2'>Game Designer Document</Typography>
        </HeaderButton>
      )}
      <Language lang={props.lang} />
    </Container>
  )
}

export default Header
