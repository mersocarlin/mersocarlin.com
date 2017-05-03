import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { fetchSocialList } from '../actions/social'
import Icon from '../components/icon'
import Image from '../components/image'
import SocialList from '../components/social-list'
import './home.scss'


class Home extends Component {
  static contextTypes = {
    intl: PropTypes.object,
  }

  static propTypes = {
    dispatch: PropTypes.func,
    socialList: PropTypes.object,
  }

  static defaultProps = {
    dispatch: () => { },
    socialList: {},
  }

  componentDidMount () {
    this.props.dispatch(fetchSocialList())
  }

  renderImage () {
    return (
      <Image src={this.context.intl.formatMessage({ id: 'mersocarlin.gravatarUrl' })} />
    )
  }

  renderName () {
    return (
      <h2 className="myName">
        {this.context.intl.formatMessage({ id: 'application.name' })}
      </h2>
    )
  }

  renderTitle () {
    return (
      <div className="rubberBand animated myTitle">
        <h3>
          {this.context.intl.formatMessage({ id: 'mersocarlin.title' })}
          <Icon icon="code" />
        </h3>
      </div>
    )
  }

  render () {
    const { socialList } = this.props

    return (
      <div className="page-home">
        {this.renderImage()}
        {this.renderName()}
        {this.renderTitle()}
        {!socialList.isFetching && <SocialList items={socialList.items} />}
      </div>
    )
  }
}


export default connect(state => ({
  socialList: state.socialList,
}))(Home)
