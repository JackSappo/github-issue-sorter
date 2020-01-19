import { combineReducers } from 'redux';
import activeRepo from './activeRepo';
import issues from './issues';
import repos from './repos';

export default combineReducers({
  activeRepo,
  issues,
  repos
})