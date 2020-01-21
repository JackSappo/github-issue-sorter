import React from 'react';
import { connect } from 'react-redux'

import { sortIssues } from '../actions/issues';

function Issue (props) {
  return (
    <div className="issue">
      <div className="issue-sorter">
        <div>
          <i className="fas fa-caret-up"></i>
        </div>
        <div>
          <i className="fas fa-caret-down"></i>
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

const mapDispatchToProps = dispatch => ({
  sortIssues: (...args) => dispatch(sortIssues(...args))
})

export default connect(null, mapDispatchToProps)(Issue)