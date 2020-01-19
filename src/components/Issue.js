import React from 'react';

export function Issue (props) {
  return (
    <div className="issue">
      <div className="issue-dragger">
        <i className="fas fa-grip-horizontal"></i>
      </div>
      <div className="issue-avatar">
        <img src={props.issue.user && props.issue.user.avatar_url} />
      </div>
      {props.issue.title}
    </div>
  )
}