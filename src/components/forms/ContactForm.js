// @flow
import React from 'react'
import { FormattedMessage } from 'react-intl'
import { compose, withHandlers, withState } from 'recompose'
import { Form, Message } from 'semantic-ui-react'

import { withIntl } from '../../higher-order'
import { Text, TextArea } from '../inputs'

import type { IntlT } from '../../types'

type ContactT = {
  email: string,
  message: string,
  name: string,
  subject: string,
  validation: string,
}

type ContactValidationT = {
  email: boolean,
  message: boolean,
  name: boolean,
  subject: boolean,
  validation: boolean,
}

type ApiPropsT = {
  contact?: ContactT,
  error?: any,
  isSubmiting: boolean,
  onSubmit: (contact: ContactT) => void,
}

type PropsT = {
  formData: ContactT,
  intl: IntlT,
  onPropChange: (name: string, value: string) => void,
  validation: ContactValidationT,
} & ApiPropsT

function ContactForm({
  error,
  formData,
  intl,
  isSubmiting,
  onPropChange,
  onSubmit,
  validation,
}: PropsT) {
  const emailAddress = intl.formatMessage({ id: 'mersocarlin.email' })

  return (
    <Form error={!!error}>
      <Form.Group widths="equal">
        <Text
          hasError={validation.name}
          label={intl.formatMessage({ id: 'contact.form.name.label' })}
          name="name"
          onChange={onPropChange}
          placeholder={intl.formatMessage({
            id: 'contact.form.name.placeholder',
          })}
          required
          value={formData.name}
        />
        <Text
          hasError={validation.email}
          label={intl.formatMessage({ id: 'contact.form.email.label' })}
          name="email"
          onChange={onPropChange}
          placeholder={intl.formatMessage({
            id: 'contact.form.email.placeholder',
          })}
          required
          type="email"
          value={formData.email}
        />
      </Form.Group>

      <Text
        hasError={validation.subject}
        label={intl.formatMessage({ id: 'contact.form.subject.label' })}
        name="subject"
        onChange={onPropChange}
        placeholder={intl.formatMessage({
          id: 'contact.form.subject.placeholder',
        })}
        required
        value={formData.subject}
      />

      <TextArea
        hasError={validation.message}
        label={intl.formatMessage({ id: 'contact.form.message.label' })}
        name="message"
        onChange={onPropChange}
        required
        value={formData.message}
      />

      <Text
        hasError={validation.validation}
        label={intl.formatMessage({ id: 'contact.form.validation.label' })}
        name="validation"
        onChange={onPropChange}
        required
        value={formData.validation}
      />

      {error && (
        <Message
          error
          header={intl.formatMessage({ id: 'contact.form.errorHeader' })}
          icon="warning sign"
          content={
            <FormattedMessage
              id={error.message || 'contact.form.errorMessage'}
              defaultMessage={error.message || ''}
              tagName="p"
              values={{
                email: (
                  <a
                    href={`mailto:${emailAddress}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {emailAddress}
                  </a>
                ),
              }}
            />
          }
        />
      )}

      <Form.Button loading={isSubmiting} onClick={onSubmit}>
        {intl.formatMessage({ id: 'contact.form.send' })}
      </Form.Button>
    </Form>
  )
}

const defaultValidation = {
  email: false,
  message: false,
  name: false,
  subject: false,
  validation: false,
}

export default compose(
  withIntl,
  withState('formData', 'setFormData', ({ contact }) => ({
    email: '',
    message: '',
    name: '',
    subject: '',
    validation: '',
    ...contact,
  })),
  withState('validation', 'setValidation', defaultValidation),
  withHandlers({
    onPropChange: ({ formData, setFormData }) => (
      name: string,
      value: string
    ) =>
      setFormData({
        ...formData,
        [name]: value,
      }),
    onSubmit: ({ formData, onSubmit, setValidation, validation }) => () => {
      const textInputs = ['name', 'email', 'subject', 'message', 'validation']

      let hasError
      textInputs.forEach(input => {
        if (!hasError && !formData[input]) {
          hasError = true
          setValidation({
            ...defaultValidation,
            [input]: true,
          })
        }
      })

      if (hasError) {
        return
      }

      if (formData.validation !== '8') {
        setValidation({
          ...validation,
          validation: true,
        })
        return
      }

      // reset validation
      setValidation(defaultValidation)

      onSubmit(formData)
    },
  })
)(ContactForm)
