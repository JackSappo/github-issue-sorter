import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import { simpleAction } from './actions/simpleAction';


class App extends Component {
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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
