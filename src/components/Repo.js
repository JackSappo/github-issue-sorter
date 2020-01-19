import React from 'react';
import { connect } from 'react-redux';
import { setActiveRepo } from '../actions/repos'

function Repo(props) {
  const onClick = () => { props.setActiveRepo(props.repo.name) }
  
  return (
    <div className="repo" onClick={onClick}>
      {props.repo.name}
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  setActiveRepo: (repoName) => dispatch(setActiveRepo(repoName))
})

export default connect(null, mapDispatchToProps)(Repo);