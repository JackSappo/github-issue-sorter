import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import repos from './repos';

export default combineReducers({
  simpleReducer,
  repos
})