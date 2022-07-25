import React, { useEffect, useState } from 'react'
import { getData } from '../../Server/server'
import ListBox from './ListBox'
import { Swiper, SwiperSlide } from "swiper/react";


const Trending = () => {
  const [data, setData] = useState([])
  const item = false

  // get trending data 
  let trendingData = async () => {
    let response = await getData(item)
    setData(response)
  }

  // sehife ilk yuklendiyinde datalarin apiden cekilmesi
  useEffect(() => {
    trendingData()
  }, [])

  return (
    <div className='mt-24 flex gap-6 flex-col mb-32'>
      <h2 className='font-bold text-lg font-montserrat'>Trending</h2>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          className="mySwiper"
        >
          {
            data.map(item => (
              <SwiperSlide key={item.id}><ListBox text="trending" id={item.id} image={item.image} desc={item.creditsText} /></SwiperSlide>
            ))
          }
        </Swiper>
    </div>
  )
}

export default Trending