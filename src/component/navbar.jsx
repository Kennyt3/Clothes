import React from 'react'
import { BsHandbag } from 'react-icons/bs'
import { CiSearch } from 'react-icons/ci'
import { TfiClose } from 'react-icons/tfi'
import { useProvider } from '../clothcontext'
import { WiStars } from 'react-icons/wi'

const Navbar = () => {
  const {
    lightmode,
    isSearchOpen,
    openSearchbar,
    closeSearchbar,
    setLightmode,
    toggleCart,
    // openLightmode,
    // closeLightmode,
  } = useProvider()
  return (
    <div
      className={` h-full py-[15px] px-4 ll:px-7 sm:px-10 flex  items-center justify-between`}
    >
      <h1
        className={`text-logo ${
          !lightmode && 'md:text-white'
        } font-bold text-2xl leading-[28.8px] sm:text-[32px] sm:leading-[38.4px]`}
      >
        BOMA
      </h1>
      <WiStars
        size={20}
        onClick={setLightmode}
        className={`text-logo ${!lightmode && 'md:text-white'}`}
      />
      <div className='flex gap-3 md:block'>
        <label className={`flex items-center  gap-3 relative md:hidden`}>
          {isSearchOpen ? (
            <TfiClose
              size={15}
              onClick={closeSearchbar}
              className={`${lightmode ? 'text-search' : 'text-darksearch'}`}
            />
          ) : (
            <CiSearch
              size={25}
              className={`${lightmode ? 'text-search' : 'text-darksearch'}`}
              onClick={openSearchbar}
            />
          )}
          <input
            type='search'
            placeholder='Search for item'
            className={`bg-plain w-[130px]  ${
              isSearchOpen ? 'block' : 'hidden'
            } md:hidden px-3`}
            style={{ fontFamily: 'Arial, FontAwesome' }}
          />
        </label>
        <BsHandbag
          size={20}
          className={`text-logo ml-5 ${!lightmode && 'md:text-white'}`}
          onClick={toggleCart}
        />
      </div>
    </div>
  )
}

export default Navbar

// ${lightmode ? 'text-search ' : 'text-darksearch'}
