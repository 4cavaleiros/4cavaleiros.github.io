import React, { useState } from 'react'
import styled from 'styled-components'

import { navigate } from 'gatsby'
import { Menu as MuiMenu, MenuItem as MuiMenuItem, Typography } from '@material-ui/core'
import { HeaderButton } from './Styles'

import UKSvg from '../../assets/svg/UK'
import BrazilSvg from '../../assets/svg/brazil'
import { LangKeys } from '../../pages'

const Container = styled.div`
  margin: 0px ${props => props.theme.spacing(2)}px;
`

const Menu = styled(MuiMenu)`
  .MuiMenu-paper {
    top: 48px !important;
    margin-left: 30px !important;
  }
`

const MenuItem = styled(MuiMenuItem)`
  min-width: 210px;
  align-items: center;
  justify-content: flex-start;
  padding-left: 28px;
  svg {
    margin-right: 14px;
  }
`

type Props = {
  lang: LangKeys
}

function Language(props: Props) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    setAnchorEl(event.currentTarget)
  }

  function handleClose() {
    setAnchorEl(null)
  }

  function handleSelectLanguage(lang) {
    return () => {
      navigate(`/${lang}`)
      handleClose()
    }
  }

  const { lang } = props
  console.log(lang)

  return (
    <Container>
      <HeaderButton onClick={handleClick}>
        <Typography variant='body2'>
          {lang === 'pt' && (
            <>
              <BrazilSvg style={{ width: 24 }} /> Português
            </>
          )}
          {lang === 'en' && (
            <>
              <UKSvg style={{ width: 24 }} />
              English
            </>
          )}
        </Typography>
      </HeaderButton>
      <Menu
        keepMounted
        id='menu'
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        onClose={handleClose}>
        <MenuItem onClick={handleSelectLanguage('en')}>
          <UKSvg style={{ width: 32 }} />
          <Typography variant='body2'>English</Typography>
        </MenuItem>
        <MenuItem onClick={handleSelectLanguage('pt')}>
          <BrazilSvg style={{ width: 32 }} />
          <Typography variant='body2'>Português</Typography>
        </MenuItem>
      </Menu>
    </Container>
  )
}

export default Language
