import React from 'react'
import AboutHeader from '../components/About/AboutHeader'
import AboutCustom from '../components/About/AboutCustom'
import AboutHistory from '../components/About/AboutHistory'
import AboutImage from '../components/About/AboutImage'
import AboutList from '../components/About/AboutList'

type Props = {}

const About = (props: Props) => {
  return (
    <>
    <AboutHeader/>
    <AboutList />
    <AboutHistory />
    <AboutCustom/>
    <AboutImage/>
    </>
  )
}

export default About