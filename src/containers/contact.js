import React from 'react'
import PropTypes from 'prop-types'
import { compose, lifecycle, withHandlers, withProps } from 'recompose'
import { connect } from 'react-redux'

import { env } from '../config'
import {
  resetContactForm as resetContactFormAction,
  sendContactForm as sendContactFormAction,
} from '../actions/contact'
import { fetchSocialList as fetchSocialListAction } from '../actions/social'

import { ContactForm, ContactSent, Icon, Map, SocialList } from '../components'

import { withIntl } from '../higher-order'

import './contact.scss'

const Contact = ({ center, intl, mapsApiKey, onSubmit, sendContact, socialList }) => (
  <div className="page-contact">
    <div className="ui text container">
      <div className="column">
        <h1 className="ui header">{intl.formatMessage({ id: 'contact.title' })}</h1>
      </div>
      {sendContact.contactSent ? <ContactSent /> : (
        <div className="column">
          <ContactForm
            {...sendContact}
            onSubmit={onSubmit}
          />
        </div>
      )}
    </div>
    <Map
      apiKey={mapsApiKey}
      center={center}
      options={{ zoomControl: false }}
    >
      <Icon
        icon="marker"
        size="huge"
        {...center}
      />
    </Map>
    {!socialList.isFetching && <SocialList {...socialList} />}
  </div>
)

Contact.propTypes = {
  center: PropTypes.object.isRequired,
  intl: PropTypes.object.isRequired,
  mapsApiKey: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  sendContact: PropTypes.object.isRequired,
  socialList: PropTypes.object.isRequired,
}

export default compose(
  withIntl,
  connect(state => ({
    sendContact: state.sendContact,
    socialList: state.socialList,
  }), {
    fetchSocialList: fetchSocialListAction,
    resetContactForm: resetContactFormAction,
    sendContactForm: sendContactFormAction,
  }),
  withProps(({
    center: env.map.center,
    mapsApiKey: env.google.mapsApiKey,
  })),
  withHandlers({
    onSubmit: ({ sendContactForm }) => payload => sendContactForm(payload),
  }),
  lifecycle({
    componentDidMount () {
      this.props.fetchSocialList()
    },
    componentWillUnmount () {
      this.props.resetContactForm()
    },
  }),
)(Contact)
