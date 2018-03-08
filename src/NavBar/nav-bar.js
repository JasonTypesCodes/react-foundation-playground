import React, {Component} from 'react';

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <div className="title-bar" data-responsive-toggle="example-menu" data-hide-for="medium">
          <button className="menu-icon" type="button" data-toggle="example-menu"></button>
          <div className="title-bar-title">Menu</div>
        </div>

        <div className="top-bar" id="example-menu">
          <div className="top-bar-left">
            <ul className="dropdown menu" data-dropdown-menu>
              <li className="menu-text">Site Title</li>
              <li>
                <a>One</a>
                <ul className="menu vertical">
                  <li><a>One</a></li>
                  <li><a>Two</a></li>
                  <li><a>Three</a></li>
                </ul>
              </li>
              <li><a>Two</a></li>
              <li><a>Three</a></li>
            </ul>
          </div>
          <div className="top-bar-right">
            <ul className="menu">
              <li><input type="search" placeholder="Search" /></li>
              <li><button type="button" className="button">Search</button></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;