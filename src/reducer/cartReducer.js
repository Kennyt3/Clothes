const cartReducer = (state, action) => {
  switch (action.type) {
    case 'SET_SELECTED':
      return {
        ...state,
        selected: action.payload.index,
      }
    case 'INCREASE_QUANTITY':
      return {
        ...state,
      }
    case 'REDUCE_QUANTITY':
      return {
        ...state,
      }
    default:
      return {
        ...state,
      }
  }
}

export default cartReducer
