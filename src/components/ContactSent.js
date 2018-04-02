// @flow
import React from 'react'
import { Card } from 'semantic-ui-react'

import { withIntl } from '../higher-order'
import Icon from './Icon'

import type { IntlT } from '../types'

type PropsT = {
  intl: IntlT,
}

function ContactSent({ intl }: PropsT) {
  return (
    <div className="ui column centered grid contact-sent bounceIn animated">
      <Card style={{ minWidth: 300 }}>
        <Card.Content>
          <Card.Header>
            {intl.formatMessage({ id: 'contact.feedback.header' })}
          </Card.Header>
          <Card.Meta>
            {intl.formatMessage({ id: 'contact.feedback.message1' })}
            <Icon icon="send" />
          </Card.Meta>
          <Card.Description>
            <p>{intl.formatMessage({ id: 'contact.feedback.message2' })}</p>
            <p>{intl.formatMessage({ id: 'contact.feedback.message3' })}</p>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <span className="left floated like">
            <img
              alt=""
              className="ui avatar image"
              src={intl.formatMessage({ id: 'mersocarlin.gravatarUrl' })}
            />
            <a
              href="https://twitter.com/mersocarlin"
              target="_blank"
              rel="noopener noreferrer"
            >
              @mersocarlin
            </a>
          </span>
        </Card.Content>
      </Card>
    </div>
  )
}

export default withIntl(ContactSent)
