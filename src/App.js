import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import { simpleAction } from './actions/simpleAction';
import githubClient from './clients/githubClient'

class App extends Component {
  constructor() {
    super();

    // TEMP
    this.ghClient = githubClient;

    this.state = {
      repos: []
    }
  }

  componentDidMount() {
    this.ghClient.get('/user/repos')
      .then(res => {
        this.setState({ repos: res.data })
      })
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
          this.state.repos.length
          ? <RepoList repos={this.state.repos} />
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
  simpleAction: () => dispatch(simpleAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
