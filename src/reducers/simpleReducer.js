const initialState = {
  title: 'Man'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SIMPLE_ACTION':
      return {
        title: action.payload
      }
    default:
      return state;
  }
}