import { useReducer, useContext, createContext, useEffect } from 'react'
import cartReducer from '../reducer/cartReducer'
import { useClothProvider } from './clothContext'
const cartContext = createContext()

const CartProvider = ({ children }) => {
  const { state: clothstate } = useClothProvider()

  useEffect(() => {
    setCart()
  }, [clothstate])

  const initialState = {
    cart: [],
    selected: undefined,
  }

  const setCart = () => {
    // getTotal()
    dispatch({
      type: 'SET_CART',
      payload: {
        cart: clothstate.cart,
      },
    })
  }

  // const getTotal = () => {
  //   let total = 0
  //   state.cart.map(
  //     (item) =>
  //       (total += Number(item.price.replace(/[^0-9.]+/g, '')) * item.val)
  //   )

  //   dispatch({
  //     type: 'GET_TOTAL',
  //     payload: {
  //       total: total,
  //     },
  //   })
  // }

  const selectIndex = (index) => {
    dispatch({
      type: 'SET_SELECTED',
      payload: {
        index: index,
      },
    })
  }
  const increaseQuantity = (index) => {
    selectIndex(index)
    let newArr = [...state.cart, (state.cart[index].val += 1)]
    dispatch({
      type: 'INCREASE_QUANTITY',
      payload: {
        newdata: newArr,
      },
    })
    console.log(state.cart)
  }
  const reduceQuantity = (index) => {
    selectIndex(index)
    let newArr = [
      ...state.cart,
      state.cart[index].val > 1 && (state.cart[index].val -= 1),
    ]
    dispatch({
      type: 'REDUCE_QUANTITY',
      payload: {
        newdata: newArr,
      },
    })
    console.log(state.cart)
  }

  const [state, dispatch] = useReducer(cartReducer, initialState)
  return (
    <cartContext.Provider
      value={{
        state,
        increaseQuantity,
        reduceQuantity,
      }}
    >
      {children}
    </cartContext.Provider>
  )
}

export const useCartProvider = () => {
  return useContext(cartContext)
}
export default CartProvider
