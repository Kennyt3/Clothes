import React from 'react'
import { useAppContext } from '../context/appContext'
import { CiSearch } from 'react-icons/ci'
import Cloths from './cloths'

const Hero = () => {
  const { lightmode } = useAppContext()
  return (
    <div className={`mx-auto max-w-[1200px]`}>
      <div className={`hidden md:block pt-10 ${!lightmode && 'text-white'}`}>
        <h1 className={`text-center text-2xl leading-[28.8px] font-bold mt-5`}>
          Lorem ipsum dolor sit amet consectetur
        </h1>
        <div className={` max-w-[1000px] mx-auto px-5 mt-10`}>
          <label className={`relative`}>
            <CiSearch
              className={`absolute top-3.5 left-2 bg-white text-black`}
            />
            <input
              type='search'
              placeholder='Search for item'
              className={`w-full h-[40px]  focus:border-none hover:border-none sm:block pl-10 bg-plain ${
                !lightmode && 'bg-white'
              }`}
            />
          </label>
        </div>
      </div>
      <div>
        <Cloths />
      </div>
    </div>
  )
}

export default Hero
