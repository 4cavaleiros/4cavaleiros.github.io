import * as React from 'react'
import Helmet from 'react-helmet'

import { CssBaseline, Theme } from '@material-ui/core'
import { ThemeProvider as MuiThemeProvider, StylesProvider } from '@material-ui/core/styles'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import theme from '../../src/utils/theme'
import GlobalFonts from '../../src/assets/fonts/fonts'

type Props = {
  element: React.ReactNode
}

const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
  ::selection {
    color: white;
    background-color: ${props => props.theme.palette.primary.main};
  } 
`

function Providers(props: Props) {
  return (
    <>
      <Helmet>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Helmet>
      <StylesProvider injectFirst>
        <MuiThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <GlobalFonts />
            <CssBaseline />
            {props.element}
          </ThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    </>
  )
}

export default Providers