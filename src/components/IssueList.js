import React from 'react';
import cx from 'classnames';

import { Issue } from './Issue';
import IssueCloser from './IssueCloser';

export function IssueList (props) {
  const issuesClass = cx('issue-list', {
    'repo-selected': !!props.active
  })
  return (
    <div className={issuesClass}>
      {/* <IssueCloser /> */}
      {
        props.issues.length
          ? props.issues.map((issue, i) => <Issue issue={issue} key={i}/>)
          : <div>No issues found!</div>
      }
    </div>
    
  )
}