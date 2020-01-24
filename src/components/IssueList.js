import React from 'react';
import cx from 'classnames';

import Issue from './Issue';
import { Loader } from './Loader';

export function IssueList(props) {
  const issuesClass = cx('issue-list', {
    'repo-selected': !!props.active,
    loading: props.loading
  });

  let content;
  if (props.errorMessage) {
    content = <ErrorView errorMessage={props.errorMessage} />;
  } else if (!props.issues || !props.issues.length) {
    content = <EmptyView />;
  } else {
    content = props.issues.map((issue, i) => (
      <Issue issue={issue} key={i} idx={i} issueCount={props.issues.length} />
    ));
  }

  return (
    <div className={issuesClass}>
      <div className="issue-list-inner">
        {props.loading ? <Loader /> : null}
        {content}
      </div>
    </div>
  );
}

export function EmptyView() {
  return <div className="empty-view">No issues found for this repo.</div>;
}

export function ErrorView(props) {
  return (
    <div className="error-view">
      Hit error while fetching issues:
      <br />
      <i>"{props.errorMessage}"</i>
    </div>
  );
}
