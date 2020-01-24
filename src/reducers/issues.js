export default (state = {}, action) => {
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