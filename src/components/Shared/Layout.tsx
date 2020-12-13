import * as React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { IntlProvider } from 'react-intl'

import { Paper as MuiPaper, Container as MuiContainer, Theme, CssBaseline } from '@material-ui/core'
import { LangKeys } from '../../pages'

import GlobalFonts from '../../assets/fonts/fonts'

import locales from '../../utils/locales'
import CrossImage from './CrossImage'

const Container = styled(MuiContainer)`
  padding-left: 0px;
  padding-right: 0px;
  margin-bottom: ${props => props.theme.spacing(32)}px;
`

const Paper = styled(MuiPaper)`
  position: relative;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
`

// const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
//   ::selection {
//     color: white;
//     background-color: ${props => props.theme.palette.primary.main};
//   } 
// `

type Props = {
  lang: LangKeys
  children: React.ReactNode
}

function Layout(props: Props) {
  const { lang } = props
  return (
    <IntlProvider key={lang} locale={lang} messages={locales[lang]}>
      <Container>
        <Paper elevation={14}>
          {props.children}
          <CrossImage />
        </Paper>
      </Container>
    </IntlProvider>
  )
}

export default Layout
