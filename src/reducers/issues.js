export default (state = [], action) => {
  switch (action.type) {
    case 'GET_ISSUES':
      return action.payload
    default:
      return state;
  }
}