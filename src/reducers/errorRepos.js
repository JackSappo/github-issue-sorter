export default (state = '', action) => {
  switch (action.type) {
    case 'GET_REPOS':
      return '';
    case 'REPO_ERR':
      return action.payload;
    default:
      return state;
  }
}