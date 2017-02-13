import React from 'react'
import { injectIntl, intlShape } from 'react-intl'

import Icon from './icon'

const ContactSent = ({ intl }) => {
  const { formatMessage } = intl

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
            <a href="https://twitter.com/mersocarlin" target="_blank" rel="noopener noreferrer">@mersocarlin</a>
          </span>
        </div>
      </div>
    </div>
  )
}

ContactSent.propTypes = {
  intl: intlShape.isRequired,
}

export default injectIntl(ContactSent)
