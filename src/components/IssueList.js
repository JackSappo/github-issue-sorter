import React from 'react';
import { Issue } from './Issue'

export function IssueList (props) {
  if (!props.issues.length) {
    return <div>No issues found!</div>
  }
  return props.issues.map((issue, i) => <Issue issue={issue} key={i}/>)
}