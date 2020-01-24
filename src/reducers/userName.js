export default (state = '', action) => {
  switch (action.type) {
    case 'REPOS_SUCCESS':
      return action.userInfo.login;
    case 'REPOS_ERR':
      return '';
    default:
      return state;
  }
}