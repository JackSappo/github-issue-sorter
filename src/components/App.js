import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../stylesheets/App.css';
import { simpleAction } from '../actions/simpleAction';
import { getRepos } from '../actions/getRepos';

class App extends Component {
  componentDidMount() {
    this.props.getRepos();
  }

  callSimpleAction = () => {
    this.props.simpleAction()
  }

  render() {
    const { title } = this.props.simpleReducer

    return (
      <div className="App">
        Sup My {title}
        <br/>
        <button onClick={this.callSimpleAction}>
          Promotion
        </button>
        {
          this.props.repos.length
            ? <RepoList repos={this.props.repos} />
            : <EmptyList />
        }
      </div>
    );
  }
}

function EmptyList(props) {
  return <div>Loading...</div>
}

function RepoList(props) {
  return (
    <div>
      {props.repos.map((repo, i) => <Repo repo={repo} key={i}/>)}
    </div>
  )
}

function Repo(props) {
  return (
    <div>
      {props.repo.name}
    </div>
  )
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction()),
  getRepos: () => dispatch(getRepos())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
