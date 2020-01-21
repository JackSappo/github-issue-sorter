export default (state = [], action) => {
  switch (action.type) {
    case 'GET_ISSUES':
      return action.payload
    case 'SORT_ISSUES':
      const { swapIdx1, swapIdx2 } = action.payload

      const lowIdx = Math.min(swapIdx1, swapIdx2)
      const highIdx = Math.max(swapIdx1, swapIdx2)

      const result = [
        ...state.slice(0, lowIdx),
        state[highIdx],
        state[lowIdx],
        ...state.slice(highIdx + 1)
      ]

      console.log('~= RESULT IS', result)

      return result;

    default:
      return state;
  }
}