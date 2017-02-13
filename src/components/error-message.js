import React, { PropTypes } from 'react'
import { injectIntl, intlShape, FormattedMessage } from 'react-intl'

import Icon from './icon'

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
  intl: intlShape.isRequired,
}

export default injectIntl(ErrorMessage)
