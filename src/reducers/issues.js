export default (state = {}, action) => {
  switch (action.type) {
    case 'GET_ISSUES':
    console.log('~= GETISSUES')
      return {
        ...state,
        [action.activeRepo]: action.payload
      }
    case 'SORT_ISSUES':
      const { activeRepo, swapIdx1, swapIdx2 } = action.payload

      const lowIdx = Math.min(swapIdx1, swapIdx2)
      const highIdx = Math.max(swapIdx1, swapIdx2)
      console.log('~= SORTING STATE', activeRepo, state)
      const activeIssues = state[activeRepo]

      const sortedActiveIssues = [
        ...activeIssues.slice(0, lowIdx),
        activeIssues[highIdx],
        activeIssues[lowIdx],
        ...activeIssues.slice(highIdx + 1)
      ]

      console.log('~= RESULT IS', sortedActiveIssues)

      return {
        ...state,
        [activeRepo]: sortedActiveIssues
      };

    default:
      return state;
  }
}