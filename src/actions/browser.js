export const updateBrowserDimensions = (height, width) => dispatch => {
  dispatch({
    type: 'BROWSER_RESIZE',
    payload: {
      height,
      width
    }
  });
};
