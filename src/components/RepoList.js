import React from 'react';
import Repo from './Repo'

export function RepoList(props) {
  return (
    <div className="repo-list-inner">
      {props.repos.map((repo, i) => <Repo repo={repo} key={i}/>)}
    </div>
  )
}