import React, { Component } from 'reactn';
import './App.css';

class App extends Component {

  componentDidMount() {
    this.global.fetchData();
  }

  render() {
    return (
      <button
        children={this.global.x}
        onClick={this.global.incrementX}
      />
    );
  }
}

export default App;
