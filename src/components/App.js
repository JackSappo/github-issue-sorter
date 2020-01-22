import React, { Component } from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';

import '../stylesheets/App.css';
import { getIssues } from '../actions/issues';
import { updateBrowserDimensions } from '../actions/browser';
import Header from './Header';
import { RepoList } from './RepoList'
import { IssueList } from './IssueList'

class App extends Component {
  componentDidMount() {
    window.addEventListener('resize', this.trackBrowserWidth);
  }

  componentDidUpdate(prevProps) {
    const repoChanged = prevProps.activeRepo !== this.props.activeRepo
    const noKnownIssues = !this.props.issues[this.props.activeRepo]

    if (repoChanged && noKnownIssues) {
      this.props.getIssues(this.props.userName, this.props.activeRepo)
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.trackBrowserWidth);
  }
  
  trackBrowserWidth = () => {
    this.props.updateBrowserDimensions(window.innerHeight, window.innerWidth)
  }

  render() {
    const { width, height } = this.props.browserDimensions;
    const appClass = cx('app', {
      'thin': width < 600 && width/height < 1.5
    })
    const reposClass = cx('repo-list', {
      'repo-selected': !!this.props.activeRepo
    })
    const issues = this.props.issues[this.props.activeRepo] || [];

    return (
      <div className={appClass}>
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
  getIssues: (...args) => dispatch(getIssues(...args)),
  updateBrowserDimensions: (...args) => dispatch(updateBrowserDimensions(...args))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
