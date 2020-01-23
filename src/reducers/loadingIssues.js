export default (state = false, action) => {
  switch (action.type) {
    case 'FETCHING_ISSUES':
    console.log('~= FETCHING ISSUES TRUE')
      return true;
    case 'GET_ISSUES':
      return false;
    default:
      return state;
  }
}