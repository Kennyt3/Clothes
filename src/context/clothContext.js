import { useReducer, useContext, createContext } from 'react'
import clothReducer from '../reducer/clothReducer'
import { clothdata } from '../data/clothdata'
const clothContext = createContext()

const ClothProvider = ({ children }) => {
  const initialState = {
    data: clothdata,
    selected: undefined,
    size: 0,
    value: 1,
    cart: [],
  }

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
    let newArr = [...state.data, (state.data[index].val += 1)]
    dispatch({
      type: 'INCREASE_QUANTITY',
      payload: {
        newdata: newArr,
      },
    })
  }
  const reduceQuantity = (index) => {
    selectIndex(index)
    let newArr = [
      ...state.data,
      state.data[index].val > 1 && (state.data[index].val -= 1),
    ]
    dispatch({
      type: 'REDUCE_QUANTITY',
      payload: {
        newdata: newArr,
      },
    })
  }
  const increaseSize = (index) => {
    selectIndex(index)
    let newArr = [
      ...state.data,
      state.data[index].num < state.data[index].sizeArr.length - 1 &&
        (state.data[index].num += 1),
    ]

    dispatch({
      type: 'INCREASE_SIZE',
      payload: {
        newdata: newArr,
      },
    })
  }
  const reduceSize = (index) => {
    selectIndex(index)
    let newArr = [
      ...state.data,
      state.data[index].num > 0 && (state.data[index].num -= 1),
    ]
    dispatch({
      type: 'REDUCE_SIZE',
      payload: {
        newdata: newArr,
      },
    })
  }

  const addToCart = (index) => {
    selectIndex(index)
    let newCart = state.cart.concat(state.data[index])

    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        newcart: newCart,
      },
    })

    console.log(state.cart)
  }
  const [state, dispatch] = useReducer(clothReducer, initialState)
  return (
    <clothContext.Provider
      value={{
        state,
        increaseQuantity,
        reduceQuantity,
        increaseSize,
        reduceSize,
        addToCart,
      }}
    >
      {children}
    </clothContext.Provider>
  )
}

export const useClothProvider = () => {
  return useContext(clothContext)
}
export default ClothProvider
