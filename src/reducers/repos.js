export function repos(state = null, action) {
  switch (action.type) {
    case 'REPOS_SUCCESS':
      return action.payload;
    default:
      return state;
  }
}

export function loadingRepos(state = false, action) {
  switch (action.type) {
    case 'REPOS_LOADING':
      return true;
    case 'REPOS_LOADED':
      return false;
    default:
      return state;
  }
}

export function errorRepos(state = '', action) {
  switch (action.type) {
    case 'REPOS_SUCCESS':
      return '';
    case 'REPOS_ERR':
      return action.payload;
    default:
      return state;
  }
}

export function activeRepo(state = '', action) {
  switch (action.type) {
    case 'SET_ACTIVE_REPO':
      return action.payload;
    case 'REPOS_LOADED':
      return '';
    default:
      return state;
  }
}
