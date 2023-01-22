import React from 'react'
import Navbar from './navbar'
import { useProvider } from '../clothcontext'

const Header = () => {
  const { lightmode } = useProvider()
  return (
    <div
      className={`h-[50px] sm:h-[70px] ${
        !lightmode && 'bg-smheader sm:bg-header'
      }`}
    >
      <div className={`max-w-[1200px] h-full mx-auto`}>
        <Navbar />
      </div>
    </div>
  )
}

export default Header
