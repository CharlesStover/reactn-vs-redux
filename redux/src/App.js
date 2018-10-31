import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';

class App extends Component {

  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <button
        children={this.props.x}
        onClick={this.props.incrementX}
      />
    );
  }
}

const incrementX = () => ({
  type: 'INCREMENT_X'
});

const receiveData = response => ({
  type: 'RECEIVE_DATA',
  response
});

const fetchData = () =>
  dispatch => {
    fetch('index.html')
      .then(response => response.text())
      .then(receiveData)
      .then(dispatch);
  };

export default connect(
  ({ demo }) => ({
    data: demo.data,
    x: demo.x
  }),
  ({
    fetchData,
    incrementX
  })
)(App);
