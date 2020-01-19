import React from 'react';
import Repo from './Repo'

export function RepoList(props) {
  return (
    <div>
      {props.repos.map((repo, i) => <Repo repo={repo} key={i}/>)}
    </div>
  )
}