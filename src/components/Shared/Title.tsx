import * as React from 'react'
import styled from 'styled-components'
import { Typography, TypographyProps } from '@material-ui/core'

type Props = {
  center?: boolean
  clockwise?: boolean
}

type Overwrite<T, U> = Pick<T, Exclude<keyof T, keyof U>> & U

type TitleProps = React.ComponentType<Overwrite<TypographyProps, Props>>

const Container = styled.div<Props>`
  display: flex;
  justify-content: ${props => (props.center ? 'center' : 'flex-start')};
`

const Title = styled<TitleProps>(({ center, clockwise, ...rest }) => (
  <Container center={center}>
    <Typography {...rest} />
  </Container>
))`
  position: relative;
  font-family: 'PatrickHand';
  display: inline-block;
  margin-bottom: ${props => props.theme.spacing(4)}px;
  text-align: ${props => (props.center ? 'center' : 'left')};
  z-index: 100;
  ${props =>
    props.center &&
    `
    &:before {
      position: absolute;
      left: -10%;
      bottom: 0;
      right: 0;
      content: ' ';
      width: 120%;
      height: 50px;
      border-radius: 8px;
      background-color: rgba(0, 0, 0, 0.1);
      transform: rotateZ(${props.clockwise ? '2deg' : '-2deg'}) translateY(-25px);
      z-index: -1;
    }
  `}
`

export default Title
