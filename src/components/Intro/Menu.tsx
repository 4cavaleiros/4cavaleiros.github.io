import React from 'react'
import styled from 'styled-components'

import Img, { GatsbyImageProps } from 'gatsby-image'

import { AppBar, Tab as MuiTab, Tabs as MuiTabs } from '@material-ui/core'
import { graphql, useStaticQuery } from 'gatsby'
import { FormattedMessage } from 'react-intl'

import useScreen from '../../hooks/useScreen'

const Container = styled(AppBar)`
  background-color: rgba(0, 0, 0, 0.55);
  box-shadow: none;
  top: auto;
  bottom: 5px;
`

const ContainerFloat = styled(AppBar)`
  color: ${props => props.theme.palette.text.primary};
  background-color: #fff;
`

const Icon = styled(Img)`
  max-width: 40px;
  max-height: 40px;
  margin-right: 8px;
  ${props => props.theme.breakpoints.down('xs')} {
    top: 10px;
  }
` as React.ComponentType<GatsbyImageProps>

const Tabs = styled(MuiTabs)`
  .MuiTabs-indicator {
    background-color: red;
    border-radius: 4px;
    height: 4px;
  }
`

const Tab = styled(MuiTab)`
  opacity: 1;
  padding: 0px;
  text-transform: none;
  .MuiTab-wrapper {
    display: flex;
    flex-direction: row;
    white-space: nowrap;
    ${props => props.theme.breakpoints.down('xs')} {
      font-size: 90%;
      flex-direction: column;
    }
  }
`

export type MenuKey = 'intro' | 'about' | 'team' | 'contact'

type Props = {
  menu: MenuKey
  position?: 'absolute' | 'fixed' | 'relative'
  onChange?: (value: MenuKey) => void
}

function Menu(props: Props, ref) {
  const isMobile = useScreen('sm')
  const data = useStaticQuery(graphql`
    query {
      death: file(relativePath: { eq: "persons/head/death.png" }) {
        childImageSharp {
          fixed(width: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      conquest: file(relativePath: { eq: "persons/head/conquest.png" }) {
        childImageSharp {
          fixed(width: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      war: file(relativePath: { eq: "persons/head/war.png" }) {
        childImageSharp {
          fixed(width: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      famine: file(relativePath: { eq: "persons/head/famine.png" }) {
        childImageSharp {
          fixed(width: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  function handleChange(e, newValue) {
    props.onChange?.(newValue)
    document.getElementById(newValue)?.scrollIntoView({ behavior: 'smooth' })
  }

  const { position = 'absolute' } = props
  const Wrapper = position === 'absolute' ? Container : ContainerFloat

  return (
    <Wrapper position={position} ref={ref}>
      <Tabs variant={isMobile ? "fullWidth" : "standard"} centered value={props.menu} onChange={handleChange}>
        <Tab
          value='intro'
          label={<FormattedMessage id='menu.home' defaultMessage='Home' />}
          icon={<Icon fixed={data.death.childImageSharp.fixed} />}
        />
        <Tab
          value='about'
          label={<FormattedMessage id='menu.about' defaultMessage='About' />}
          icon={<Icon fixed={data.conquest.childImageSharp.fixed} />}
        />
        <Tab
          value='team'
          label={<FormattedMessage id='menu.team' defaultMessage='Team' />}
          icon={<Icon fixed={data.war.childImageSharp.fixed} />}
        />
        <Tab
          value='contact'
          label={<FormattedMessage id='menu.contact' defaultMessage='Contact' />}
          icon={<Icon fixed={data.famine.childImageSharp.fixed} />}
        />
      </Tabs>
    </Wrapper>
  )
}

export default React.forwardRef(Menu)