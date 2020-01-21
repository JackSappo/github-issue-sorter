import moment from 'moment';
import ghClient from '../clients/githubClient';

export const getIssues = (user, repo) => dispatch => {
  return ghClient.getIssues(user, repo)
    .then(res => {
      dispatch({
        type: 'GET_ISSUES',
        payload: parseIssues(res.data)
      })
    })
 }

export const sortIssues = (issues, swapIdx1, swapIdx2) => dispatch => {
  const newIssues = [
    ...issues.slice(0, swapIdx1),
    issues[swapIdx2],
    issues[swapIdx1],
    ...issues.slice(swapIdx2 + 1)
  ]

  dispatch({
    type: 'SORT_ISSUES',
    payload: newIssues
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