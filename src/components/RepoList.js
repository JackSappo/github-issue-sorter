import React from 'react';
import Repo from './Repo'
import cx from 'classnames';

export function RepoList(props) {
  const reposClass = cx('repo-list', {
    'repo-selected': !!props.activeRepo
  })

  let content;
  console.log('~= REPOS', props.repos)
  if (!props.repos) {
    content = <DefaultView />
  } else if (!props.repos.length) {
    content = <EmptyView />
  } else if (!props.errorMessage) {
    content = <ErrorView />
  } else {
    content = props.repos.map((repo, i) => <Repo repo={repo} key={i}/>)
  }
  
  return (
    <div className={reposClass}>
      <div className="repo-list-inner">
        {content}
      </div>
    </div>
  )
}


function DefaultView() {
  return (
    <div className="empty-list">
      Welcome!<br/>
      Please enter a GitHub token.
    </div>
  );
}

function EmptyView() {
  return (
    <div className="empty-list">
      No repos found for this GitHub token.
    </div>
  );
}

function ErrorView(props) {
  return (
    <div className="empty-list">
      Hit error while fetching repos:<br />
      {props.errorMessage}
    </div>
  );
}