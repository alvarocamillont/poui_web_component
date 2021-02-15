import React, { Component } from 'react';
import './App.css';
import { Dropdown } from './dropdown.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      title: 'project-react'
    };

    this.handleShow = this.handleShow.bind(this);
  }

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({
  //       show: false,
  //       title: '123'
  //     });
  //   }, 2000);
  // }

  render() {
    return (
      <div>
        <h1>React Application using Web Components</h1>

        <p>
          {this.state.show ? 'open' : 'closed'}
        </p>

        <Dropdown title={this.state.title} onShow={this.handleShow}>
          Hello from dropdown
        </Dropdown>
      </div>
    );
  }

  handleShow(e) {
    this.setState({ show: e.detail });
  }
}

export default App;
