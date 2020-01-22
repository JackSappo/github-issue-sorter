import React from 'react';
import { connect } from 'react-redux'

import { sortIssues } from '../actions/issues';

function Issue (props) {
  function promote() {
    const { sortIssues, idx } = props
    sortIssues(idx, idx - 1)
  }

  function demote() {
    const { sortIssues, activeRepo, idx } = props
    sortIssues(activeRepo, idx, idx + 1)
  }

  const isTopIssue = props.idx === 0;
  const isBottomIssue = props.idx === props.issueCount - 1;

  return (
    <div className="issue">
      <div className="issue-sort-container">
        <div className="issue-sort promote">
          { !isTopIssue ? <i className="fas fa-caret-up" onClick={promote} /> : null }
        </div>
        <div className="issue-sort demote">
          { !isBottomIssue ? <i className="fas fa-caret-down" onClick={demote}></i> : null }
        </div>
      </div>
      <div className="issue-avatar">
        <img src={props.issue.avatarUrl} alt="User Avatar"/>
      </div>
      <div className="issue-title">{props.issue.title}</div>
      <div className="issue-details">
        <div className="issue-detail">
          <b>Created:</b> {props.issue.created}
        </div>
        <div className="issue-detail">
          <b>Last Updated:</b> {props.issue.lastUpdated}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  activeRepo: state.activeRepo
})

const mapDispatchToProps = dispatch => ({
  sortIssues: (...args) => dispatch(sortIssues(...args))
})

export default connect(mapStateToProps, mapDispatchToProps)(Issue)