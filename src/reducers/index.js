import { combineReducers } from 'redux';
import activeRepo from './activeRepo';
import browserSize from './browser'
import errorRepos from './errorRepos'
import issues from './issues';
import loadingIssues from './loadingIssues';
import loadingRepos from './loadingRepos';
import repos from './repos';
import userName from './userName'

export default combineReducers({
  activeRepo,
  browserSize,
  errorRepos,
  issues,
  loadingIssues,
  loadingRepos,
  repos,
  userName
})