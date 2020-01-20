import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import { setActiveRepo } from '../actions/repos'

function Repo(props) {
  const isActiveRepo = props.activeRepo === props.repo.name;
  const repoClass = cx('repo', {
    active: isActiveRepo
  })
  const onClick = () => { props.setActiveRepo(props.repo.name) }
  // TODO: Some indicator that a repo won't work. Why is bootcamp prep deprecated gone but others aren't?

  return (
    <div className={repoClass} onClick={onClick}>
      <div className="repo-name">
        {props.repo.name}
      </div>
      <div className="repo-detail">
        Open Issues: {props.repo.open_issues}
      </div>
      {/* {isActiveRepo ? <ActiveRepoIndicator /> : null} */}
    </div>
  )
}

function ActiveRepoIndicator() {
  return (
    <div className="active-repo-indicator">
      <i className="fas fa-caret-right" />
    </div>
  )
}

const mapStateToProps = ({ activeRepo }) => ({
  activeRepo
})

const mapDispatchToProps = dispatch => ({
  setActiveRepo: (repoName) => dispatch(setActiveRepo(repoName))
})

export default connect(mapStateToProps, mapDispatchToProps)(Repo);