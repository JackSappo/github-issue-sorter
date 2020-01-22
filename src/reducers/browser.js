// const initialState = {
//   height: window.innerHeight,
//   width: window.innerWidth
// }

export default (state = '', action) => {
  switch (action.type) {
    case 'BROWSER_RESIZE':
      const { width, height } = action.payload
      return (width < 600 && width/height < 1.5) ? 'thin' : ''
    default:
      return state;
  }
}