export default (state = '', action) => {
  switch (action.type) {
    case 'SET_ACTIVE_REPO':
      return action.payload
    case 'GET_REPOS':
      return '';
    default:
      return state;
  }
}