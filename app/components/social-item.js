import React, { Component, PropTypes } from 'react';
import $ from 'jquery';


export default class SocialItem extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
  }

  componentDidMount () {
    $(this.refs.socialItem).popup({
      inline: true,
    });
  }

  componentWillUnmount () {
    $(this.refs.socialItem).popup('destroy');
  }

  render () {
    const { item } = this.props;

    return (
      <a
        ref="socialItem"
        data-content={item.title}
        className={`ui circular icon button ${item.className || item.icon}`}
        href={item.url}
        target="_blank"
      >
        <i className={`${item.icon} icon`}></i>
      </a>
    );
  }
}
