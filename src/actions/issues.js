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
 
function parseIssues(issueData) {
   return issueData.map(issue => ({
    avatarUrl: issue.user.avatar_url,
    title: issue.title,
    created: moment(issue.created_at).format('DD/MM/YYYY'),
    lastUpdated: moment(issue.updated_at).fromNow()
   }))
 }