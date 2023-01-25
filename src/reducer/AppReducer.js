const AppReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_LIGHT':
      return {
        ...state,
        lightmode: !state.lightmode,
      }

    case 'SEARCH_OPEN':
      return {
        ...state,
        searchopen: true,
      }
    case 'SEARCH_CLOSE':
      return {
        ...state,
        searchopen: false,
      }

    default:
      return {
        ...state,
      }
  }
}

export default AppReducer
