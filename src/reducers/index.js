import { combineReducers } from 'redux';
import activeRepo from './activeRepo';
import browserDimensions from './browser'
import issues from './issues';
import repos from './repos';
import userName from './userName'

export default combineReducers({
  activeRepo,
  browserDimensions,
  issues,
  repos,
  userName
})