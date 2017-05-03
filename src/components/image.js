import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Loader from './loader'

class Image extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
  }

  constructor (props) {
    super(props)

    this.state = { isLoading: true }
    this.handleLoad = this.handleLoad.bind(this)
  }

  handleLoad () {
    this.setState({ isLoading: false })
  }

  renderImage (src, isLoading) {
    const imageClass = classNames(
      'ui medium circular image fadeIn animated',
      { hidden: isLoading },
    )

    return (
      <img
        alt=""
        className={imageClass}
        src={src}
        onLoad={this.handleLoad}
      />
    )
  }

  render () {
    const { src } = this.props
    const { isLoading } = this.state

    return (
      <div className="image-component">
        {isLoading && <Loader />}
        {this.renderImage(src, isLoading)}
      </div>
    )
  }
}

export default Image
