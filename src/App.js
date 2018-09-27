import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    hidden: true,
}

  escondete = ()=> {
    this.setState({
      hidden: !this.state.hidden,
    })
  }

  render() {
    console.log('render App')
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {this.state.hidden && <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> }
        <button onClick={this.escondete}>Toggler</button>
        
      </div>
    );
  }
}

export default App;
