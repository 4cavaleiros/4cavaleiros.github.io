import React from 'react'
import styled from 'styled-components'

import { Theme, Button } from '@material-ui/core'

type Props = {
  visibleDown?: boolean
}

const Container = styled.div<Props>`
  ${(props: Props & { theme: Theme }) => `
    display: ${props.visibleDown ? 'none' : 'flex'};
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
    top: ${props.theme.spacing(2)}px;
    button, a {
      margin-right: ${props.theme.spacing(2)}px;
    }
    ${props.theme.breakpoints.down('sm')} {
      display: ${props.visibleDown ? 'flex' : 'none'};
      button, a {
        margin-top: ${props.theme.spacing(2)}px;
      }
    }
    ${props.theme.breakpoints.down('xs')} {
      flex-direction: column;
    }
  `}
`

const macOS = 'https://drive.google.com/file/d/0B04ULKwaZK7ZWnJ1NnV3dHBXUVU/view?usp=sharing'
const windows = 'https://drive.google.com/file/d/0B04ULKwaZK7ZYS1GdS05N1lLcUU/view?usp=sharing'

function Download(props: Props) {
  return (
    <Container visibleDown={props.visibleDown}>
      <Button variant='contained' color='primary' href={macOS} target='_BLANK'>
        Download macOS
        <svg
          style={{ marginLeft: 4, marginBottom: 4 }}
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          strokeWidth='0.5'
          stroke='#ffffff'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'>
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path
            fill='#ffffff'
            d='M9 7c-3 0-4 3-4 5.5 0 3 2 7.5 4 7.5 1.088-.046 1.679-.5 3-.5 1.312 0 1.5.5 3 .5s4-3 4-5c-.028-.01-2.472-.403-2.5-3-.019-2.17 2.416-2.954 2.5-3-1.023-1.492-2.951-1.963-3.5-2-1.433-.111-2.83 1-3.5 1-.68 0-1.9-1-3-1z'
          />
          <path fill='#ffffff' d='M12 4a2 2 0 0 0 2 -2a2 2 0 0 0 -2 2' />
        </svg>
      </Button>
      <Button variant='contained' color='default' href={windows} target='_BLANK'>
        Download Windows 7 / 8
        <svg
          style={{ marginLeft: 4 }}
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          strokeWidth='0.5'
          stroke='#e0e0e0'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'>
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path
            fill='rgba(0, 0, 0, 0.87)'
            d='M17.8 20l-12 -1.5c-1 -.1 -1.8 -.9 -1.8 -1.9v-9.2c0 -1 .8 -1.8 1.8 -1.9l12 -1.5c1.2 -.1 2.2 .8 2.2 1.9v12.1c0 1.2 -1.1 2.1 -2.2 1.9z'
          />
          <line x1='12' y1='5' x2='12' y2='19' />
          <line x1='4' y1='12' x2='20' y2='12' />
        </svg>
      </Button>
    </Container>
  )
}

export default Download
