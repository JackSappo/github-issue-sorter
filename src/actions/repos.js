import ghClient from '../clients/githubClient';

export const getRepos = (ghToken) => dispatch => {
  if (ghToken) {
    ghClient.setToken(ghToken);
  }

  dispatch({
    type: 'FETCHING_REPOS'
  })

  return Promise.all([ghClient.getRepos(), ghClient.getUser()])
    .then(([repoRes, userRes]) => {
      dispatch({
        type: 'GET_REPOS',
        payload: repoRes.data,
        userInfo: userRes.data
      })
    })
    .catch(err => {
      dispatch({
        type: 'REPO_ERR',
        payload: err.message
      })
    })
    .finally(() => {
      dispatch({ type: 'REPOS_LOADED' })
    })
 }

 export const setActiveRepo = (repoName) => dispatch => {
   dispatch({
     type: 'SET_ACTIVE_REPO',
     payload: repoName
   })
 }
