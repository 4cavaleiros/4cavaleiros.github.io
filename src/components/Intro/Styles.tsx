import { Button, ButtonProps } from '@material-ui/core'
import styled from 'styled-components'

export const HeaderButton = styled(Button)`
  padding: 4px 12px;
  border-radius: ${props => props.theme.shape.borderRadius}px;
  color: white;
  .MuiTypography-root {
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      margin-right: 8px;
    }
  }
` as React.ComponentType<ButtonProps & { target?: string }>
