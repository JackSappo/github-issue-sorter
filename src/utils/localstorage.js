export const loadState = () => {
  try {
    return JSON.parse(localStorage.getItem('state')) || undefined
  } catch (e) {
    return undefined;
  }
}

export const saveState = (state) => {
  try {
    localStorage.setItem('state', JSON.stringify(state))
  } catch (e) {}
}

export default {
  loadState,
  saveState
}