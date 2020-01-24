export default (state = '', action) => {
  switch (action.type) {
    case 'REPOS_SUCCESS':
      return action.userInfo.login;
    default:
      return state;
  }
}