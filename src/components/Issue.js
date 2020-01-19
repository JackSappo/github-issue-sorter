import React from 'react';

export function Issue (props) {
  return (
    <div className="issue">
      <div className="issue-dragger">
        <i className="fas fa-grip-horizontal"></i>
      </div>
      <div className="issue-avatar">
        <img src={props.issue.avatarUrl} />
      </div>
      <div className="issue-details">
        <div className="issue-detail">{props.issue.title}</div>
        <div className="issue-detail">Created: {props.issue.created}</div>
        <div className="issue-detail">Last Updated: {props.issue.lastUpdated}</div>
      </div>
    </div>
  )
}