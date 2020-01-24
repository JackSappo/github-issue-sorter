export default (state = false, action) => {
  switch (action.type) {
    case 'FETCHING_ISSUES':
      return true;
    case 'ISSUES_LOADED':
      return false;
    default:
      return state;
  }
}