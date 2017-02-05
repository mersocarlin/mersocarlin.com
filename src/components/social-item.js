import React, { Component, PropTypes } from 'react';


class SocialItem extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
  };

  render () {
    const { item } = this.props;

    return (
      <a
        ref="socialItem"
        data-content={item.url}
        className={`ui circular icon button ${item.className || item.icon}`}
        href={item.url}
        target="_blank"
      >
        <i className={`${item.icon} icon`}></i>
      </a>
    );
  }
}

export default SocialItem;
