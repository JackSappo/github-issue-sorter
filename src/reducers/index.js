import { combineReducers } from 'redux';
import browserSize from './browser';
import { issues, errorIssues, loadingIssues } from './issues';
import { repos, errorRepos, loadingRepos, activeRepo } from './repos';
import userName from './userName';

export default combineReducers({
  activeRepo,
  browserSize,
  errorIssues,
  errorRepos,
  issues,
  loadingIssues,
  loadingRepos,
  repos,
  userName
});
