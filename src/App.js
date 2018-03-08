import React, { Component } from 'react';

import FoundationApp from './FoundationApp/foundation-app';
import NavBar from './NavBar/nav-bar';

import './App.css';

class App extends Component {

  render() {
    return (
      <FoundationApp className="App AnotherClass">
        <NavBar />

        <div className="row">
          <div className="columns">
            <p><a data-open="exampleModal1">Click me for a modal</a></p>

            <div className="reveal" id="exampleModal1" data-reveal="" style={{padding: 0}}>
              <div className="card">
                <div className="card-divider alert">
                  <h5>A Title</h5>
                  <button className="close-button" data-close="" aria-label="Close reveal" type="button">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="card-section">Some content</div>
              </div>

            </div>
          </div>
        </div>

        <div>
          Other Stuff
        </div>
      </FoundationApp>
    );
  }
}

export default App;
