import $ from 'jquery';
import 'foundation-sites';

import React, { Component } from 'react';

class FoundationApp extends Component {

  componentDidMount() {
    $(document).foundation();
  }

  render() {
    const {className} = this.props;
    const classNames = 'FoundationApp' + (className ? ` ${className}` : '' );
    return (
      <div className={classNames}>
        {this.props.children}
      </div>
      );
  }
}

export default FoundationApp;
