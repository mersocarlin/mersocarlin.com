// @flow
import React, { Fragment } from 'react'
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
      <Map apiKey={mapsApiKey} center={center} options={{ zoomControl: false }}>
        <Icon icon="marker" size="huge" {...center} />
      </Map>

      {!socialList.isFetching && (
        <div style={{ margin: '2em 0', textAlign: 'center' }}>
          <SocialList {...socialList} />
        </div>
      )}
    </Fragment>
  )
}

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
