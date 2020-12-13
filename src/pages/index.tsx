import React from 'react'

import SEO from '../components/Shared/Seo'
import Logo from '../components/Shared/Logo'
import Layout from '../components/Shared/Layout'
import Download from '../components/Intro/Download'
import Providers from '../components/Shared/Providers'

import Team from '../components/Sections/Team'
import Intro from '../components/Sections/Intro'
import About from '../components/Sections/About'
import Persons from '../components/Sections/Persons'
import Contact from '../components/Sections/Contact'
import Document from '../components/Sections/Document'

import CrossImage from '../components/Shared/CrossImage'

export type LangKeys = 'pt' | 'en'

export type Props = {
  pageContext: {
    langKey: LangKeys
  }
}

function IndexPage(props: Props) {
  const lang = props.pageContext.langKey
  return (
    <Layout lang={lang}>
      <SEO lang={lang} />
      <Intro lang={lang}>
        <Logo />
        <Download visibleDown={false} />
      </Intro>
      <Download visibleDown />
      <About />
      <Document />
      <Team />
      <Contact />
      <CrossImage />
    </Layout>
  )
}

export default IndexPage
