export default (state = [], action) => {
  switch (action.type) {
    case 'GET_REPOS':
      console.log('~= PAYLOAD IS', action.payload)
      return action.payload
    default:
      return state;
  }
}