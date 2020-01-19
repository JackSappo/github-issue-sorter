export default (state = '', action) => {
  switch (action.type) {
    case 'SET_ACTIVE_REPO':
      return action.payload
    default:
      return state;
  }
}