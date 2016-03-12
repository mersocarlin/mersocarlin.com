import React, { Component, PropTypes } from 'react';

import Loader from './loader';

export default class ImageComponent extends Component {
  static propTypes = {
    className: PropTypes.string,
    src: PropTypes.string.isRequired,
  }

  constructor (props) {
    super(props);

    this.img = null;
    this.state = { isLoading: true };
  }

  componentDidMount () {
    if (this.state.isLoading) {
      this.createImage();
    }
  }

  componentWillUnmount () {
    this.destroyImage();
  }

  createImage () {
    this.destroyImage();

    this.img = new Image();
    this.img.onload = ::this.handleLoad;
    this.img.src = this.props.src;
  }

  destroyImage () {
    if (!this.img) {
      return;
    }

    this.img.onload = null;
    this.img.onerror = null;
    this.img = null;
  }

  handleLoad () {
    this.setState({ isLoading: false });
  }

  render () {
    const { isLoading } = this.state;

    return (
      <div className="image-component">
        {isLoading && <Loader />}
        {!isLoading && <img {...this.props} />}
      </div>
    );
  }
}
