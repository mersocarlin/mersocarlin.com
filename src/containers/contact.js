import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'


import { env } from '../config'
import { resetContactForm, sendContactForm } from '../actions/contact'
import { fetchSocialList } from '../actions/social'

import ContactForm from '../components/contact-form'
import Icon from '../components/icon'
import Map from '../components/map'
import SocialItem from '../components/social-item'
import './contact.scss'

class Contact extends Component {
  static contextTypes = {
    intl: PropTypes.object,
  }

  static propTypes = {
    dispatch: PropTypes.func,
    sendContact: PropTypes.object,
    socialList: PropTypes.object,
  }

  static defaultProps = {
    dispatch: null,
    sendContact: null,
    socialList: null,
  }

  constructor () {
    super()
    this.state = {
      hasError: false,
      errorFields: {
        name: false,
        email: false,
        subject: false,
        message: false,
      },
    }

    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidMount () {
    this.props.dispatch(fetchSocialList())
  }

  componentWillUnmount () {
    this.props.dispatch(resetContactForm())
  }

  onSubmit (payload) {
    this.props.dispatch(sendContactForm(payload))
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

  renderContactSentCard (formatMessage, { contactSent }) {
    if (!contactSent) return null

    return (
      <div className="ui column centered grid contact-sent bounceIn animated">
        <div className="ui card">
          <div className="content">
            <div className="header">
              {formatMessage({ id: 'contact.feedback.header' })}
            </div>
            <div className="meta">
              <span className="category">
                {formatMessage({ id: 'contact.feedback.message1' })}
                <Icon icon="send" />
              </span>
            </div>
            <div className="description">
              <p>{formatMessage({ id: 'contact.feedback.message2' })}</p>
              <p>{formatMessage({ id: 'contact.feedback.message3' })}</p>
            </div>
          </div>
          <div className="extra content">
            <span className="left floated like">
              <img alt="" className="ui avatar image" src={formatMessage({ id: 'mersocarlin.gravatarUrl' })} />
              <a href="http://www.twitter.com/mersocarlin" target="_blank" rel="noopener noreferrer">@mersocarlin</a>
            </span>
          </div>
        </div>
      </div>
    )
  }

  renderContactForm ({ contactSent, error, isSubmiting }) {
    if (contactSent) return null

    return (
      <div className="column">
        <ContactForm
          error={error}
          isSubmiting={isSubmiting}
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }

  render () {
    const { google: { mapsApiKey }, map: { center } } = env
    const { intl: { formatMessage } } = this.context
    const { sendContact, socialList } = this.props

    return (
      <div className="page-contact">
        <div className="ui text container">
          <div className="column">
            <h1 className="ui header">{formatMessage({ id: 'contact.title' })}</h1>
          </div>
          {this.renderContactSentCard(formatMessage, sendContact)}
          {this.renderContactForm(sendContact)}
        </div>
        <Map
          apiKey={mapsApiKey}
          center={center}
          options={{ zoomControl: false }}
        >
          <Icon
            icon="marker"
            size="huge"
            lat={center.lat}
            lng={center.lng}
          />
        </Map>
        {!socialList.isFetching && this.renderSocialList(socialList)}
      </div>
    )
  }
}

export default connect(state => ({
  sendContact: state.sendContact,
  socialList: state.socialList,
}))(Contact)
