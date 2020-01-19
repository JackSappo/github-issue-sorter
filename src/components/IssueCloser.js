import React from 'react';
import { connect } from 'react-redux';
import { setActiveRepo } from '../actions/repos'

function IssueCloser(props) {
  return (
    <div className="issue-closer" onClick={props.setActiveRepo}>
      <i className="fas fa-window-close"></i>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  setActiveRepo: () => dispatch(setActiveRepo(''))
})

export default connect(null, mapDispatchToProps)(IssueCloser);