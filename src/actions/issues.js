import moment from 'moment';
import ghClient from '../clients/githubClient';

export const getIssues = (user, repo) => dispatch => {
  dispatch({
    type: 'ISSUES_LOADING'
  })

  return ghClient.getIssues(user, repo)
    .then(res => {
      dispatch({
        type: 'GET_ISSUES',
        payload: parseIssues(res.data),
        activeRepo: repo
      })
    })
    .catch(err => {
      dispatch({
        type: 'ISSUE_ERR',
        payload: err.message
      })
    })
    .finally(() => {
      dispatch({ type: 'ISSUES_LOADED' })
    })
 }

export const sortIssues = (activeRepo, swapIdx1, swapIdx2) => dispatch => {
  dispatch({
    type: 'SORT_ISSUES',
    payload: {
      activeRepo,
      swapIdx1,
      swapIdx2
    }
  })
}
 
function parseIssues(issueData) {
   return issueData.map(issue => ({
    avatarUrl: issue.user.avatar_url,
    title: issue.title,
    created: moment(issue.created_at).format('DD/MM/YYYY'),
    lastUpdated: moment(issue.updated_at).fromNow()
   }))
 }