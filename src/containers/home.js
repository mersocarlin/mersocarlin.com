import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { fetchSocialList } from '../actions/social'
import { strings } from '../config'
import Icon from '../components/icon'
import Image from '../components/image'
import SocialItem from '../components/social-item'
import './home.scss'


class Home extends Component {
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
      <Image src={strings.app.gravatarUrl} />
    )
  }

  renderSayMyName () {
    return <h2 className="myName">{strings.app.appName}</h2>
  }

  renderSayMyTitle () {
    return (
      <div className="rubberBand animated myTitle">
        <h3>
          {strings.app.myTitle}
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
        {this.renderSayMyName()}
        {this.renderSayMyTitle()}
        {!socialList.isFetching && this.renderSocialList(socialList)}
      </div>
    )
  }
}


export default connect(state => ({
  socialList: state.socialList,
}))(Home)
