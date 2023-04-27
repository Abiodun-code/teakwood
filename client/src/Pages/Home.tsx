import React from 'react'
import HomeLarge from '../components/Home/HomeLarge'
import HomeSmall from '../components/Home/HomeSmall'
import HomeCustom from '../components/Home/HomeCustom'
import HomeMail from '../components/Home/HomeMail'

type Props = {}

const Home = (props: Props) => {
  return (
    <>
      <HomeLarge/>
      <HomeSmall/>
      <HomeCustom/>
      <HomeMail/>
    </>
  )
}

export default Home