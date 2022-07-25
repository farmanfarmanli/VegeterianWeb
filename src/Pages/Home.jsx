import React, { useState } from 'react'
import Trending from '../components/Home/Trending'
import VegeterianPicks from '../components/Home/VegeterianPicks'


const Home = () => {
  return (
    <div>
        <VegeterianPicks />
        <Trending />
    </div>
  )
}

export default Home