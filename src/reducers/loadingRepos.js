export default (state = false, action) => {
  switch (action.type) {
    case 'FETCHING_REPOS':
      return true;
    case 'REPOS_LOADED':
      return false;
    default:
      return state;
  }
}