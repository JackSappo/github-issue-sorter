import moment from 'moment';
import ghClient from '../clients/githubClient';

export const getIssues = (user, repo) => dispatch => {
  dispatch({
    type: 'FETCHING_ISSUES'
  })

  console.log('~== GETTING ISSUES')

  return ghClient.getIssues(user, repo)
    .then(res => {
      console.log('~== GOT ISSUES')
      dispatch({
        type: 'GET_ISSUES',
        payload: parseIssues(res.data),
        activeRepo: repo
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