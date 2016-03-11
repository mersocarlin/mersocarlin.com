import React, { Component } from 'react';


export default class App extends Component {
  render () {
    return (
      <div className="app-mersocarlin">
        {this.props.children}
      </div>
    );
  }
}
