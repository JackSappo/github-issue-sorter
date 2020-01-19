import ghClient from '../clients/githubClient';

export const getIssues = (activeRepo) => dispatch => {
  console.log('~= ACTIVEREPO', activeRepo)
  return ghClient.getIssues(activeRepo)
    .then(res => {
      dispatch({
        type: 'GET_ISSUES',
        payload: res.data
      })
    })
 }