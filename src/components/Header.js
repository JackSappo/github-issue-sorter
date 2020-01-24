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
    const { userName } = this.props;

    return (
      <div className="header">
        <div className="header-title">
          Github Issue Sorter
        </div>
        <div className="header-username">
          {userName ? `Username: ${userName}` : ''}
        </div>
        <div className="repo-fetcher">
          <input placeholder="Github Token" onChange={this.onChange}/>
          <button onClick={this.getRepos} disabled={!this.state.token}>Get My Repos!</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userName: state.userName
})

const mapDispatchToProps = dispatch => ({
  getRepos: (...args) => dispatch(getRepos(...args))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);