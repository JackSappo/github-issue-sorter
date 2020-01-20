import ghClient from '../clients/githubClient';

export const getRepos = (ghToken) => dispatch => {
  console.log('~= GHTOKEN IS', ghToken)
  if (ghToken) {
    ghClient.setToken(ghToken);
  }

  return ghClient.getRepos()
    .then(res => {
      dispatch({
        type: 'GET_REPOS',
        payload: res.data
      })
    })
 }

 export const setActiveRepo = (repoName) => dispatch => {
   dispatch({
     type: 'SET_ACTIVE_REPO',
     payload: repoName
   })
 }
