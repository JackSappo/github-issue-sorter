import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import './App.css';
import { simpleAction } from './actions/simpleAction';

import { GITHUB_KEY } from './GITHUB_KEY';

class App extends Component {
  constructor() {
    super();

    this.ghClient = axios.create({
      baseURL: 'https://api.github.com/',
      timeout: 5000,
      headers: {
        Accept: 'application/vnd.github.v3+json',
        Authorization: `token ${GITHUB_KEY}`
      }
    })

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
