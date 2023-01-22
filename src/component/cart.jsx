import React from 'react'
import { useProvider } from '../clothcontext'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

const Cart = () => {
  const {
    cart,
    setCart,
    cartsel,
    updateCartsel,
    prevcartQuant,
    nextcartQuant,
    quant,
    cartRef,
  } = useProvider()
  const removeItem = (index) => {
    index === cartsel &&
      setCart((cart) => cart.filter((el) => cart.indexOf(el) !== cartsel))
  }

  return (
    <div className={` w-[250px] z-[1] bg-white  text-black px-3`}>
      <div className={`border-b-[1px]  border-bod pt-[60px]`}>
        <h4 className={`font-medium text-lg leading-[24.2px] mb-[60px]`}>
          items in cart ({cart.length || 0})
        </h4>
        {cart.map(({ id, name, price, num }, index) => {
          return (
            <div
              key={index}
              className={` border-t-[1px] border-bod`}
              onClick={() => updateCartsel(index)}
            >
              <div className={`flex justify-between pt-[30px]`}>
                <h5 className={`text-lg font-semibold leading-[20px]`}>
                  {name}
                </h5>
                <p className={`text-lg font-semibold leading-[20px]`}>
                  {price}
                </p>
              </div>
              <div className={`flex justify-between py-[24px]`}>
                <button
                  className={`text-danger ${
                    index === cartsel ? 'block' : 'invisible'
                  } capitalize text-lg font-normal leading-[24px]`}
                  onClick={() => removeItem(index)}
                >
                  Remove item
                </button>
                <div className='flex gap-3 justify-between items-center'>
                  <p className={`uppercase text-sm font-normal leading-[24px]`}>
                    Qty
                  </p>
                  <div className={`flex justify-between items-center`}>
                    <BsChevronLeft
                      onClick={() => index === cartsel && prevcartQuant(index)}
                    />
                    <p ref={cartRef}>{num}</p>
                    <BsChevronRight
                      onClick={() => index === cartsel && nextcartQuant(index)}
                    />
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Cart
