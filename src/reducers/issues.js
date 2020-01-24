export function issues (state = {}, action) {
  switch (action.type) {
    case 'GET_ISSUES':
      return {
        ...state,
        [action.activeRepo]: action.payload
      }
    case 'SORT_ISSUES':
      const { activeRepo, swapIdx1, swapIdx2 } = action.payload

      const lowIdx = Math.min(swapIdx1, swapIdx2)
      const highIdx = Math.max(swapIdx1, swapIdx2)
      const activeIssues = state[activeRepo]

      const sortedActiveIssues = [
        ...activeIssues.slice(0, lowIdx),
        activeIssues[highIdx],
        activeIssues[lowIdx],
        ...activeIssues.slice(highIdx + 1)
      ]

      return {
        ...state,
        [activeRepo]: sortedActiveIssues
      };
    case 'GET_REPOS':
      return {};
    default:
      return state;
  }
}

export function loadingIssues (state = false, action) {
  switch (action.type) {
    case 'ISSUES_LOADING':
      return true;
    case 'ISSUES_LOADED':
      return false;
    default:
      return state;
  }
}

export function errorIssues (state = '', action) {
  switch (action.type) {
    case 'ISSUE_ERR':
      return action.payload;
    case 'GET_ISSUES':
      return '';
    default:
      return state;
  }
}