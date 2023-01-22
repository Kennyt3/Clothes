import { createContext, useContext, useState, useEffect, useRef } from 'react'
import { clothdata } from './clothsdata'

const clothContext = createContext()

const ClothProvider = ({ children }) => {
  const [lightmode, setLightMode] = useState(true)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [size, setSize] = useState(0)
  const [quant, setQuant] = useState(1)
  const [updated, setUpdated] = useState(false)
  const [cartsel, setCartsel] = useState()
  const [cart, setCart] = useState([])
  const [cartQuant, setcartQuant] = useState(0)
  const [hidden, setHidden] = useState(true)
  const [cartopen, setCartopen] = useState(false)
  const sizeArr = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl']
  const [selected, setSelected] = useState()
  const cartRef = useRef()
  useEffect(() => {
    setSize(1)
    setQuant(1)
    setcartQuant(1)
  }, [selected, cart])
  useEffect(() => {
    updated && setSelected(clothdata.length)
    setUpdated(true)
  }, [cart, updated])

  const toggleCart = () => {
    setCartopen(!cartopen)
  }
  const updateCart = (id) => {
    setCart((prev) => {
      return [...prev, { ...clothdata[id], num: quant }]
    })
  }

  const updateSelected = (id) => setSelected(id)
  const updateCartsel = (id) => setCartsel(id)

  const nextcartQuant = (id) => {
    id === cartsel &&
      (cart[id].num = cart[id].num + 1)(
        (cartRef.current.textContent = cart[id].num)
      )
  }
  const prevcartQuant = (id) => {
    id === cartsel &&
      (cart[id].num = cart[id].num - 1)(
        (cartRef.current.textContent = cart[id].num)
      )
  }
  const nextSize = () => {
    size < sizeArr.length - 1 && setSize(size + 1)
  }
  const nextQuant = (index) => {
    index === selected && setQuant(quant + 1)
  }
  const prevQuant = (index) => {
    index === selected && setQuant(quant > 1 ? quant - 1 : 1)
  }

  const prevSize = () => {
    size > 0 && setSize(size - 1)
  }

  const setLightmode = () => {
    setLightMode(!lightmode)
  }

  const openSearchbar = () => {
    setIsSearchOpen(true)
  }
  const closeSearchbar = () => {
    setIsSearchOpen(false)
  }

  return (
    <clothContext.Provider
      value={{
        isSearchOpen,
        lightmode,
        openSearchbar,
        closeSearchbar,
        size,
        nextSize,
        prevSize,
        sizeArr,
        updateSelected,
        selected,
        quant,
        prevQuant,
        nextQuant,
        hidden,
        setUpdated,
        setHidden,
        updateCart,
        prevcartQuant,
        nextcartQuant,
        cart,
        cartRef,
        setCart,
        cartopen,
        toggleCart,
        setLightmode,
        cartsel,
        updateCartsel,
      }}
    >
      {children}
    </clothContext.Provider>
  )
}

export const useProvider = () => {
  return useContext(clothContext)
}

export default ClothProvider
