// @flow
import React from 'react'
import { compose, lifecycle, withHandlers, withProps } from 'recompose'
import { connect } from 'react-redux'
import { Header } from 'semantic-ui-react'

import { env } from '../config'
import { ContactActionCreators, SocialActionCreators } from '../actions'
import { ContactForm, ContactSent, Icon, Map, SocialList } from '../components'
import { withIntl } from '../higher-order'
import type {
  ContactT,
  IntlT,
  MapCenterT,
  SendContactReducerT,
  SocialListReducerT,
} from '../types'

import './contact.css'

type PropsT = {
  center: MapCenterT,
  intl: IntlT,
  mapsApiKey: string,
  onSubmit: (contact: ContactT) => void,
  sendContact: SendContactReducerT,
  socialList: SocialListReducerT,
}

const Contact = ({
  center,
  intl,
  mapsApiKey,
  onSubmit,
  sendContact,
  socialList,
}: PropsT) => (
  <div className="page-contact">
    <div className="ui text container">
      <div className="column">
        <Header as="h1" style={{ marginBottom: '1em' }}>
          {intl.formatMessage({ id: 'contact.title' })}
        </Header>
      </div>
      {sendContact.contactSent ? (
        <ContactSent />
      ) : (
        <div className="column">
          <ContactForm {...sendContact} onSubmit={onSubmit} />
        </div>
      )}
    </div>
    <Map apiKey={mapsApiKey} center={center} options={{ zoomControl: false }}>
      <Icon icon="marker" size="huge" {...center} />
    </Map>
    {!socialList.isFetching && <SocialList {...socialList} />}
  </div>
)

export default compose(
  withIntl,
  connect(
    state => ({
      sendContact: state.sendContact,
      socialList: state.socialList,
    }),
    {
      fetchSocialList: SocialActionCreators.fetchSocialList,
      resetContactForm: ContactActionCreators.resetContactForm,
      sendContactForm: ContactActionCreators.sendContactForm,
    }
  ),
  withProps({
    center: env.map.center,
    mapsApiKey: env.google.mapsApiKey,
  }),
  withHandlers({
    onSubmit: ({ sendContactForm }) => payload => sendContactForm(payload),
  }),
  lifecycle({
    componentDidMount() {
      this.props.fetchSocialList()
    },
    componentWillUnmount() {
      this.props.resetContactForm()
    },
  })
)(Contact)
