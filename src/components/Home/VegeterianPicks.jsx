import React, { useEffect, useState } from 'react'
import { getData } from '../../Server/server'
import ListBox from './ListBox'
import { Swiper, SwiperSlide } from "swiper/react";


const VegeterianPicks = () => {
  const [data,setData] = useState([])
  const item = true

  // get vegeterian slider data
  let vegetarianData = async () =>{
    let response = await getData(item)
    setData(response)
  }



  //sehife ilk yuklendiyinde datalarin apiden cekilmesi
  useEffect(()=>{
    vegetarianData()
  },[])
  return (
    <div className='mt-24 flex gap-6 flex-col'> 
        <h2 className='font-bold text-lg font-montserrat'>Our Vegeterian Picks</h2>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          className="mySwiper"
        >
          {
            data.map(item => (
              <SwiperSlide key={item.id}><ListBox text="vegeterian" id={item.id} image={item.image} desc={item.creditsText} /></SwiperSlide>
            ))
          }
        </Swiper>
    </div>
  )
}

export default VegeterianPicks