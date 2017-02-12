import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { fetchSocialList } from '../actions/social'
import Icon from '../components/icon'
import Image from '../components/image'
import SocialItem from '../components/social-item'
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

  renderMyImage () {
    return (
      <Image src={this.context.intl.formatMessage({ id: 'mersocarlin.gravatarUrl' })} />
    )
  }

  renderMyName () {
    return (
      <h2 className="myName">
        {this.context.intl.formatMessage({ id: 'application.name' })}
      </h2>
    )
  }

  renderSayMyTitle () {
    return (
      <div className="rubberBand animated myTitle">
        <h3>
          {this.context.intl.formatMessage({ id: 'mersocarlin.title' })}
          <Icon icon="code" />
        </h3>
      </div>
    )
  }

  renderSocialList ({ items }) {
    return (
      <div className="social-list">
        {
          items.map(item => (
            <SocialItem
              key={item.icon}
              item={item}
            />
          ))
        }
      </div>
    )
  }

  render () {
    const { socialList } = this.props

    return (
      <div className="page-home">
        {this.renderMyImage()}
        {this.renderMyName()}
        {this.renderSayMyTitle()}
        {!socialList.isFetching && this.renderSocialList(socialList)}
      </div>
    )
  }
}


export default connect(state => ({
  socialList: state.socialList,
}))(Home)
