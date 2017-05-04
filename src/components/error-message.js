import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

import Icon from './icon'
import { withIntl } from '../higher-order'

const ErrorMessage = ({ error, intl }) => {
  const emailAddress = intl.formatMessage({ id: 'mersocarlin.email' })

  return (
    <div className="ui icon error message">
      <Icon icon="warning sign" />
      <div className="content">
        <div className="header">
          {intl.formatMessage({ id: 'contact.form.errorHeader' })}
        </div>
        <FormattedMessage
          id={error.message || 'contact.form.errorMessage'}
          defaultMessage={error.message || ''}
          tagName="p"
          values={{
            email: (
              <a href={`mailto:${emailAddress}`} target="_blank" rel="noopener noreferrer">
                {emailAddress}
              </a>
            ),
          }}
        />
      </div>
    </div>
  )
}

ErrorMessage.propTypes = {
  error: PropTypes.object.isRequired,
  intl: PropTypes.object.isRequired,
}

export default withIntl(ErrorMessage)
