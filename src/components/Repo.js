import React from 'react';
import { connect } from 'react-redux';
import { setActiveRepo } from '../actions/repos'

function Repo(props) {
  const onClick = () => { props.setActiveRepo(props.repo.name) }
  // TODO: Some indicator that a repo won't work. Why is bootcamp prep deprecated gone but others aren't?

  return (
    <div className="repo" onClick={onClick}>
      <div className="repo-name">
        {props.repo.name}
      </div>
      <div className="repo-detail">
        Open Issues: {props.repo.open_issues}
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  setActiveRepo: (repoName) => dispatch(setActiveRepo(repoName))
})

export default connect(null, mapDispatchToProps)(Repo);