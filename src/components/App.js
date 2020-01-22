import React, { Component } from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';

import '../stylesheets/App.css';
import { getIssues } from '../actions/issues';
import Header from './Header';
import { RepoList } from './RepoList'
import { IssueList } from './IssueList'

class App extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.activeRepo !== this.props.activeRepo) {
      console.log('~= REPO ID CHANGED', this.props.userName, this.props.activeRepo)
      this.props.getIssues(this.props.userName, this.props.activeRepo)
    }
  }

  render() {
    const reposClass = cx('repo-list', {
      'repo-selected': !!this.props.activeRepo
    })
    const issues = this.props.issues[this.props.activeRepo] || [];

    return (
      <div className="app">
        <Header />
        <div className="main-container">
          <div className={reposClass}>
            {
              this.props.repos.length
              ? <RepoList repos={this.props.repos} />
              : <EmptyList />
            }
          </div>
          <IssueList active={!!this.props.activeRepo} issues={issues} />
        </div>
      </div>
    );
  }
}

function EmptyList() {
  return <div>Loading...</div>
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  // getRepos: () => dispatch(getRepos()),
  getIssues: (...args) => dispatch(getIssues(...args))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
