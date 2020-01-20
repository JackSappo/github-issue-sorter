import React, { Component } from 'react';

export class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="repo-fetcher">
          <input placeholder="Github Token"></input>
          <button>Get My Repos!</button>
        </div>
      </div>
    )
  }
}