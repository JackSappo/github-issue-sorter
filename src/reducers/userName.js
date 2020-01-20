export default (state = '', action) => {
  switch (action.type) {
    case 'GET_REPOS':
      return action.userInfo.login;
    default:
      return state;
  }
}