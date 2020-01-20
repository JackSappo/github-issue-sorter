import { combineReducers } from 'redux';
import activeRepo from './activeRepo';
import issues from './issues';
import repos from './repos';
import userName from './userName'

export default combineReducers({
  activeRepo,
  issues,
  repos,
  userName
})