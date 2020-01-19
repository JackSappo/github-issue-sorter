import React from 'react';
import { Issue } from './Issue'

export function IssueList (props) {
  return props.issues.map(issue => <Issue issue={issue} />)
}