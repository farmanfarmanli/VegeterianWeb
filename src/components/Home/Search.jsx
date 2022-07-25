import React from 'react'
import {BsSearch} from "react-icons/bs"
import {FaPizzaSlice,FaHamburger} from "react-icons/fa"
import {GiNoodles,GiChopsticks} from "react-icons/gi"

const Search = () => {
  const iconsData = [
    {
      id:1,
      icons:<FaPizzaSlice className='text-white text-sm' />,
      text:"Italian"
    },
    {
      id:2,
      icons:<FaHamburger className='text-white text-sm'/>,
      text:"American"
    },
    {
      id:3,
      icons:<GiNoodles className='text-white text-sm'/>,
      text:"Thai"
    },
    {
      id:4,
      icons:<GiChopsticks className='text-white text-sm'/>,
      text:"Japanese"
    }
  ]
  return (
    <div className='flex items-center flex-col gap-7'>
      {/* Input container start */}
      <div className='flex gap-2 items-center border rounded-lg w-[40vw] h-10 px-2 bg-mainBlack'>
      <BsSearch  className='text-white'/>
      <input type="text" className='border-none outline-none w-full text-white bg-mainBlack placeholder:text-white' placeholder='cookies'/>
      </div>
       {/* Input container end */}

       {/* Circle  icons container start */}
        <div className='flex items-center justify-between gap-8'>
        {iconsData.map(icon=>(
          <div className='flex flex-col items-center justify-center border rounded-full w-14 h-14 bg-mainBlack cursor-pointer hover:animate-bounce' key={icon.id}>
            {icon.icons}
            <p className='text-[0.7vw] text-white'>{icon.text}</p>
          </div>
        ))}
        </div>
       {/* Circle  icons container end */}
    </div>
  )
}

export default Search