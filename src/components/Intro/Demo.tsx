import React from 'react'
import styled from 'styled-components'

import { Container as MuiContainer } from '@material-ui/core'

import DemoVideoMP4 from '../../assets/video/demo.mp4'
import DemoVideoWebm from '../../assets/video/demo.webm'

const Container = styled.div``

const Video = styled.video`
  width: 100%;
  height: 100%;
`

type Props = {}

function Demo(props: Props) {
  return (
    <Container>
      <Video autoPlay loop controls={false} muted>
        <source src={DemoVideoMP4} type='video/mp4' />
        <source src={DemoVideoWebm} type='video/webm' />
      </Video>
    </Container>
  )
}

export default Demo
