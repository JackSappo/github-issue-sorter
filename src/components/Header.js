import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRepos } from '../actions/repos'

class Header extends Component {
  constructor() {
    super()
    this.state = {
      token: ''
    }
  }

  onChange = e => {
    this.setState({
      token: e.target.value
    })
  }

  getRepos = () => {
    this.props.getRepos(this.state.token);
  }
  
  render() {
    return (
      <div className="header">
        <div className="header-title">
          Github Issue Sorter
        </div>
        <div className="repo-fetcher">
          <input placeholder="Github Token" onChange={this.onChange}/>
          <button onClick={this.getRepos}>Get My Repos!</button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getRepos: (...args) => dispatch(getRepos(...args))
})

export default connect(null, mapDispatchToProps)(Header);