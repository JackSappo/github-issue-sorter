import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';

import { sortIssues } from '../actions/issues';

function Issue(props) {
  function promote() {
    if (isTopIssue) return;

    const { sortIssues, activeRepo, idx } = props;
    sortIssues(activeRepo, idx, idx - 1);
  }

  function demote() {
    if (isBottomIssue) return;

    const { sortIssues, activeRepo, idx } = props;
    sortIssues(activeRepo, idx, idx + 1);
  }

  const isTopIssue = props.idx === 0;
  const isBottomIssue = props.idx === props.issueCount - 1;
  const isThin = props.browserSize === 'thin';

  const promoteClass = cx('issue-sort', { promote: !isTopIssue });
  const demoteClass = cx('issue-sort', { demote: !isBottomIssue });

  return (
    <div className="issue">
      <div className="issue-sort-container">
        <div className={promoteClass} onClick={promote}>
          {!isTopIssue ? <i className="fas fa-caret-up" /> : null}
        </div>
        <div className={demoteClass} onClick={demote}>
          {!isBottomIssue ? <i className="fas fa-caret-down"></i> : null}
        </div>
      </div>
      <div className="issue-avatar">
        <img src={props.issue.avatarUrl} alt="User Avatar" />
      </div>
      <div className="issue-title">{props.issue.title}</div>
      <div className="issue-details">
        <div className="issue-detail">
          <b>{isThin ? 'C' : 'Created'}:</b> {props.issue.created}
        </div>
        <div className="issue-detail">
          <b>{isThin ? 'U' : 'Last Updated'}:</b> {props.issue.lastUpdated}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  activeRepo: state.activeRepo,
  browserSize: state.browserSize
});

const mapDispatchToProps = dispatch => ({
  sortIssues: (...args) => dispatch(sortIssues(...args))
});

export default connect(mapStateToProps, mapDispatchToProps)(Issue);
