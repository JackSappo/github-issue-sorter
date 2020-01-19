import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../stylesheets/App.css';
import { getRepos } from '../actions/repos';
import { getIssues } from '../actions/issues';
import { RepoList } from './RepoList'

class App extends Component {
  componentDidMount() {
    this.props.getRepos();
  }

  componentWillReceiveProps(newProps) {
    if (this.props.activeRepo !== newProps.activeRepo) {
      console.log('~= REPO ID CHANGED')
      this.props.getIssues()
    }
  }

  callSimpleAction = () => {
    this.props.simpleAction()
  }

  render() {
    const reposClass = 'repo-list'
    const issuesClass = 'issue-list'

    return (
      <div className="app">
        <div className={reposClass}>
          {
            this.props.repos.length
            ? <RepoList repos={this.props.repos} />
            : <EmptyList />
          }
        </div>
        <div className={issuesClass}></div>
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
  getRepos: () => dispatch(getRepos()),
  getIssues: () => dispatch(getIssues())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
