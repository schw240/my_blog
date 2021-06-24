import React from 'react'
import AboutTitle from '../components/about/title'
import Brand from '../components/about/brand'
import Introduce from '../components/about/introduce'
import Keyword from '../components/about/keyword'
import Skills from '../components/about/skills'
import Path from '../components/common/path'

const about = () => {
  return (
    <>
      <Path path=" 소개" />
      <AboutTitle />
      <Keyword />
      <Introduce />
      <Skills />
      <Brand />
    </>
  )
}

export default about
