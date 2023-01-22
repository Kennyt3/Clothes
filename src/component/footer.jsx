import React from 'react'
import { useProvider } from '../clothcontext'

const Footer = () => {
  const { lightmode } = useProvider()
  return (
    <div
      className={`${!lightmode && 'bg-black'} ${
        !lightmode && 'text-white'
      } h-24`}
    >
      <h1>Hello world</h1>
    </div>
  )
}

export default Footer
