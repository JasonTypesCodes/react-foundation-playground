import React, { Component } from 'react';

import FoundationApp from './FoundationApp/foundation-app';
import NavBar from './NavBar/nav-bar';

import './App.css';

class App extends Component {

  render() {
    return (
      <FoundationApp className="App AnotherClass">
        <NavBar />

        <div>
          Other Stuff
        </div>
      </FoundationApp>
    );
  }
}

export default App;
