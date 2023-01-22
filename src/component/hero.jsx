import { CiSearch } from 'react-icons/ci'
import { useProvider } from '../clothcontext'
import Cloths from './cloths'
import Cart from './cart'
const Hero = () => {
  const { lightmode, cartopen } = useProvider()
  return (
    <div className={`max-w-[1200px] mx-auto relative`}>
      <div className={`pt-10`}>
        <h1
          className={`hidden md:block text-center text-2xl leading-[28.8px] font-bold mt-5 ${
            !lightmode && 'text-darksearch'
          }`}
        >
          Lorem ipsum dolor sit amet consectetur
        </h1>
        <div
          className={`max-w-[1000px] mx-auto text-black hidden md:block mt-10 px-5`}
        >
          <label className={`relative`}>
            <CiSearch
              className={`absolute top-3.5 left-2 bg-white text-black`}
              size={15}
            />
            <input
              type='search'
              placeholder='search for item'
              className={`w-full h-[40px]  focus:border-none hover:border-none sm:block pl-10 bg-plain ${
                !lightmode && 'bg-white'
              }`}
            />
          </label>
          <div
            className={`${
              cartopen ? 'block' : 'hidden'
            } absolute top-0 right-0`}
          >
            <Cart />
          </div>
        </div>
        <Cloths />
      </div>
    </div>
  )
}

export default Hero
