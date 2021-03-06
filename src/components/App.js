import React, { Component } from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';

import '../stylesheets/App.css';
import { getIssues, clearIssuesError } from '../actions/issues';
import { updateBrowserDimensions } from '../actions/browser';
import Header from './Header';
import { Loader } from './Loader';
import RepoList from './RepoList';
import IssueList from './IssueList';

class App extends Component {
  componentDidMount() {
    window.addEventListener('resize', this.trackBrowserWidth);
  }

  componentDidUpdate(prevProps) {
    const repoChanged = prevProps.activeRepo !== this.props.activeRepo;
    const noKnownIssues =
      this.props.activeRepo && !this.props.issues[this.props.activeRepo];

    if (repoChanged && noKnownIssues) {
      this.props.getIssues(this.props.userName, this.props.activeRepo);
    } else if (repoChanged) {
      this.props.clearIssuesError();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.trackBrowserWidth);
  }

  trackBrowserWidth = () => {
    this.props.updateBrowserDimensions(window.innerHeight, window.innerWidth);
  };

  render() {
    const appClass = cx('app', this.props.browserSize);
    const mainContainerClass = cx('main-container', {
      loading: this.props.loadingRepos
    });
    const issues = this.props.issues[this.props.activeRepo] || [];

    return (
      <div className={appClass}>
        <Header />
        <div className={mainContainerClass}>
          {this.props.loadingRepos ? <Loader /> : null}
          <RepoList />
          <IssueList issues={issues} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  getIssues: (...args) => dispatch(getIssues(...args)),
  clearIssuesError: () => dispatch(clearIssuesError()),
  updateBrowserDimensions: (...args) =>
    dispatch(updateBrowserDimensions(...args))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
