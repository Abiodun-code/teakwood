import React from 'react'
import HomeLarge from '../components/Home/HomeLarge'
import HomeSmall from '../components/Home/HomeSmall'
import HomeCustom from '../components/Home/HomeCustom'

type Props = {}

const Home = (props: Props) => {
  return (
    <>
      <HomeLarge/>
      <HomeSmall/>
      <HomeCustom/>
    </>
  )
}

export default Home