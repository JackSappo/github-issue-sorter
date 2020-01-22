const initialState = {
  height: window.innerHeight,
  width: window.innerWidth
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'BROWSER_RESIZE':
      return action.payload
    default:
      return state;
  }
}