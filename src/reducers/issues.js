export default (state = [], action) => {
  switch (action.type) {
    case 'GET_ISSUES':
      return action.payload
    case 'SORT_ISSUES':
      const { swapIdx1, swapIdx2 } = action.payload

      return [
        ...state.slice(0, swapIdx1),
        state[swapIdx2],
        state[swapIdx1],
        ...state.slice(swapIdx2 + 1)
      ]
    default:
      return state;
  }
}