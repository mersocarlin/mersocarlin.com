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
      <div className="app-mersocarlin">
        {this.props.children}
      </div>
    );
  }

});
