import React from 'react'
import Navbar from './navbar'
import { useAppContext } from '../context/appContext'

const Header = () => {
  const { lightmode } = useAppContext()
  return (
    <div
      className={`${
        !lightmode && 'bg-smheader sm:bg-header text-white'
      } h-[50px] sm:h-[70px] `}
    >
      <div className='max-w-[1200px] mx-auto h-full'>
        <Navbar />
      </div>
    </div>
  )
}

export default Header
