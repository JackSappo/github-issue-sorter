import ghClient from '../clients/githubClient';

export const getRepos = (ghToken) => dispatch => {
  console.log('~= GHTOKEN IS', ghToken)
  if (ghToken) {
    ghClient.setToken(ghToken);
  }

  dispatch({
    type: 'FETCHING_REPOS'
  })

  return Promise.all([ghClient.getRepos(), ghClient.getUser()])
    .then(([repoRes, userRes]) => {
      console.log('~= REPORES IS', repoRes)
      console.log('~= USERRES IS', userRes)
      dispatch({
        type: 'GET_REPOS',
        payload: repoRes.data,
        userInfo: userRes.data
      })
    })
 }

 export const setActiveRepo = (repoName) => dispatch => {
   dispatch({
     type: 'SET_ACTIVE_REPO',
     payload: repoName
   })
 }
