import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'
import { loadState, saveState } from './utils/localstorage'

export default function configureStore() {
  const persistedState = loadState();

  const store = createStore(
    rootReducer,
    persistedState,
    applyMiddleware(thunk)
  );

  store.subscribe(() => {
    const persistedState = {
      ...store.getState(),
      errorIssues: '',
      errorRepos: ''
    }
    saveState(persistedState);
  })

  return store;
}