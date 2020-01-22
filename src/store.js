import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'
import { loadState, saveState } from './utils/localstorage'

// TODO: initialState not needed?
export default function configureStore(initialState = {}) {
  const persistedState = loadState();

  const store = createStore(
    rootReducer,
    persistedState,
    applyMiddleware(thunk)
  );

  store.subscribe(() => {
    saveState(store.getState());
  })

  return store;
}