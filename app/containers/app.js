import React from 'react';
import { Link } from 'react-router';


import { FluxMixins, RouterMixins } from '../mixins';
import { Strings } from '../constants';


export default React.createClass({

  mixins: [ FluxMixins, RouterMixins ],

  getInitialState () {
    return {
      pageTitle: "Home"
    }
  },

  componentDidMount () { },

  componentDidUpdate () { },

  render () {
    return (
      <div className="app">

        <Link to="/" activeClassName="active">Home</Link>
        <br/>
        <Link to="/about" activeClassName="active">About</Link>

        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }

});
