import { combineReducers } from 'redux';
import activeRepo from './activeRepo';
import browserSize from './browser'
import issues from './issues';
import repos from './repos';
import userName from './userName'

export default combineReducers({
  activeRepo,
  browserSize,
  issues,
  repos,
  userName
})