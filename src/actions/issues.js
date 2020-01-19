import ghClient from '../clients/githubClient';

export const getIssues = () => dispatch => {
  console.log('~= GETTING ISSUES')
  return ghClient.getIssues()
    .then(res => {
      dispatch({
        type: 'GET_ISSUES',
        payload: res.data
      })
    })
 }