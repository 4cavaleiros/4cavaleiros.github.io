import React, { useState } from 'react'
import styled from 'styled-components'

import Demo from '../Intro/Demo'
import Menu, { MenuKey } from '../Intro/Menu'
import Header from '../Intro/Header'
import { Slide, useScrollTrigger } from '@material-ui/core'
import { LangKeys } from '../../pages'
import useScreen from '../../hooks/useScreen'

const Container = styled.section`
  position: relative;
`

const Hover = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  padding-top: ${props => props.theme.spacing(6)}px;
`

type Props = {
  lang: LangKeys
  children: React.ReactNode
}

function HideOnScroll(props: { children: React.ReactElement }) {
  const isMobile = useScreen('md')
  const trigger = useScrollTrigger({ disableHysteresis: false, threshold: isMobile ? 420 : 820 })
  return (
    <Slide appear={false} unmountOnExit direction='down' in={trigger}>
      {props.children}
    </Slide>
  )
}

function Intro(props: Props) {
  const [menu, setMenu] = useState<MenuKey>('intro')

  function handleChangeMenu(value: MenuKey) {
    setMenu(value)
  }

  const menuProps = { menu, onChange: handleChangeMenu }

  return (
    <>
      <Container id='intro'>
        <Header lang={props.lang} />
        <Hover>{props.children}</Hover>
        <Demo />
        <Menu {...menuProps} />
        <HideOnScroll>
          <Menu {...menuProps} position='fixed' />
        </HideOnScroll>
      </Container>
    </>
  )
}

export default Intro
