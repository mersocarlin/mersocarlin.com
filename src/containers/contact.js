// @flow
import React, { Fragment } from 'react'
import { compose, lifecycle, withHandlers, withProps } from 'recompose'
import { connect } from 'react-redux'
import { Header } from 'semantic-ui-react'

import { env } from '../config'
import { ContactActionCreators } from '../actions'
import { ContactForm, ContactSent, Icon, Map, SocialList } from '../components'
import { withIntl } from '../higher-order'
import type { ContactT, IntlT, MapCenterT, SendContactReducerT } from '../types'

type PropsT = {
  center: MapCenterT,
  intl: IntlT,
  mapsApiKey: string,
  onSubmit: (contact: ContactT) => void,
  sendContact: SendContactReducerT,
}

const Contact = ({
  center,
  intl,
  mapsApiKey,
  onSubmit,
  sendContact,
}: PropsT) => {
  return (
    <Fragment>
      <div className="ui text container">
        <div className="column">
          <Header as="h1" style={{ marginBottom: '1em' }}>
            {intl.formatMessage({ id: 'contact.title' })}
          </Header>
        </div>

        {sendContact.contactSent ? (
          <div style={{ margin: '5em 0' }}>
            <ContactSent />
          </div>
        ) : (
          <div className="column" style={{ marginBottom: '2em' }}>
            <ContactForm
              error={sendContact.error}
              isSubmiting={sendContact.isSubmiting}
              onSubmit={onSubmit}
            />
          </div>
        )}
      </div>
      <Map
        apiKey={mapsApiKey}
        center={center}
        options={{ fullscreenControl: false, zoomControl: false }}
      >
        <Icon icon="marker" size="huge" {...center} />
      </Map>

      <div style={{ margin: '2em 0', textAlign: 'center' }}>
        <SocialList />
      </div>
    </Fragment>
  )
}

export default compose(
  withIntl,
  connect(
    state => ({
      sendContact: state.sendContact,
    }),
    {
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
    componentWillUnmount() {
      this.props.resetContactForm()
    },
  })
)(Contact)
