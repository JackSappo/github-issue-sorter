export default (state = '', action) => {
  switch (action.type) {
    case 'ISSUE_ERR':
      return action.payload;
    case 'GET_ISSUES':
      return '';
    default:
      return state;
  }
}