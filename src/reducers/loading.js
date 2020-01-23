export default (state = false, action) => {
  switch (action.type) {
    case 'FETCHING':
      return true;
    case 'GET_REPOS':
      return false;
    default:
      return state;
  }
}