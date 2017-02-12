import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { env } from '../config'
import { resetContactForm, sendContactForm } from '../actions/contact'
import { fetchSocialList } from '../actions/social'

import ContactForm from '../components/contact-form'
import ContactSent from '../components/contact-sent'
import Icon from '../components/icon'
import Map from '../components/map'
import SocialList from '../components/social-list'
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

  componentDidMount () {
    this.props.dispatch(fetchSocialList())
  }

  componentWillUnmount () {
    this.props.dispatch(resetContactForm())
  }

  renderContactForm ({ contactSent, error, isSubmiting }) {
    if (contactSent) return null

    return (
      <div className="column">
        <ContactForm
          error={error}
          isSubmiting={isSubmiting}
          onSubmit={payload => this.props.dispatch(sendContactForm(payload))}
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
          {sendContact.contactSent && <ContactSent />}
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
        {!socialList.isFetching && <SocialList items={socialList.items} />}
      </div>
    )
  }
}

export default connect(state => ({
  sendContact: state.sendContact,
  socialList: state.socialList,
}))(Contact)
