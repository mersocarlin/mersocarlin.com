// @flow
import React from 'react'

import Icon from './icon'
import { withIntl } from '../higher-order'
import type { IntlT } from '../types'

type PropsT = {
  intl: IntlT,
};

const ContactSent = ({ intl }: PropsT) => (
  <div className="ui column centered grid contact-sent bounceIn animated">
    <div className="ui card">
      <div className="content">
        <div className="header">
          {intl.formatMessage({ id: 'contact.feedback.header' })}
        </div>
        <div className="meta">
          <span className="category">
            {intl.formatMessage({ id: 'contact.feedback.message1' })}
            <Icon icon="send" />
          </span>
        </div>
        <div className="description">
          <p>{intl.formatMessage({ id: 'contact.feedback.message2' })}</p>
          <p>{intl.formatMessage({ id: 'contact.feedback.message3' })}</p>
        </div>
      </div>
      <div className="extra content">
        <span className="left floated like">
          <img alt="" className="ui avatar image" src={intl.formatMessage({ id: 'mersocarlin.gravatarUrl' })} />
          <a href="https://twitter.com/mersocarlin" target="_blank" rel="noopener noreferrer">@mersocarlin</a>
        </span>
      </div>
    </div>
  </div>
)

export default withIntl(ContactSent)
