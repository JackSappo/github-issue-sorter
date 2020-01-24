import React from 'react';
import cx from 'classnames';

import Issue from './Issue';
import { Loader } from './Loader';

export function IssueList (props) {
  const issuesClass = cx('issue-list', {
    'repo-selected': !!props.active,
    loading: props.loading
  })
  
  return (
    <div className={issuesClass}>
      <div className="issue-list-inner">
        { props.loading ? <Loader /> : null }
        {
          props.issues.length
            ? props.issues.map((issue, i) => <Issue issue={issue} key={i} idx={i} issueCount={props.issues.length}/>)
            : <div className="empty-list">No issues found!</div>
        }
      </div>
    </div>
  )
}