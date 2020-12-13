import * as React from 'react'
import { CssBaseline } from '@material-ui/core'
import { ThemeProvider as MuiThemeProvider, StylesProvider } from '@material-ui/styles'
import { ThemeProvider } from 'styled-components'

import theme from '../../utils/theme'

type Props = {
  element: React.ReactNode
}

function Providers(props: Props) {
  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {props.element}
        </ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  )
}

export default Providers
