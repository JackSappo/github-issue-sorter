export default (state = '', action) => {
  switch (action.type) {
    case 'SET_ACTIVE_REPO':
      console.log('~= REDUCER ACTION', action)
      return action.payload
    default:
      return state;
  }
}