import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';


import { Strings } from '../constants';


export default class App extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
  };

  renderMenu ({ location: { pathname } }) {
    const menuItems = [{
      name: Strings.Menu.Home,
      to: '/',
      active: [/^\/$/].some(path => path.test(pathname)),
    }, {
      name: Strings.Menu.Contact,
      to: '/contact',
      active: [/^\/contact$/].some(path => path.test(pathname)),
    }];

    return (
      <div className="ui segment top-menu">
        <div className="ui secondary pointing menu">
          {menuItems.map((item, index) => {
            const itemCssClass = classNames('item', { active: item.active });
            return (
              <Link
                key={index}
                to={item.to}
                className={itemCssClass}
              >{item.name}
              </Link>
            );
          })}
        </div>
      </div>
    );
  }

  render () {
    return (
      <div className="app-mersocarlin">
        {this.renderMenu(this.props)}
        <div className="page-mersocarlin">
          {this.props.children}
        </div>
        <div className="ui footer container">
          <div className="column">
            &copy; 2016 Hemerson Carlin. All rights reserved.
          </div>
        </div>
      </div>
    );
  }
}
