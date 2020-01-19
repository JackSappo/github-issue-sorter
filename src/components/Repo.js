import React from 'react';
import { connect } from 'react-redux';
import { setActiveRepo } from '../actions/repos'

function Repo(props) {
  const onClick = () => { props.setActiveRepo(props.repo.id) }
  
  return (
    <div onClick={onClick}>
      {props.repo.name}
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  setActiveRepo: (repoId) => dispatch(setActiveRepo(repoId))
})

export default connect(null, mapDispatchToProps)(Repo);