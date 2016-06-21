import React, { Component } from 'react';


export default class App extends Component {
  render () {
    return (
      <div className="app-mersocarlin">
        {this.props.children}
        <div className="ui footer container">
          <div className="column">
            &copy; 2016 Hemerson Carlin. All rights reserved.
          </div>
        </div>
      </div>
    );
  }
}
