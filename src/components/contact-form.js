// @flow
import React from 'react'
import { compose, lifecycle, withHandlers, withState } from 'recompose'
import classNames from 'classnames'
import { Button, Text, Textarea } from 'react-app-components'

import ErrorMessage from './error-message'
import FormField from './form-field'
import { withIntl } from '../higher-order'
import type { ContactT, IntlT, ReducerErrorT } from '../types'

type PropsT = {
  error: ReducerErrorT,
  intl: IntlT,
  isSubmiting: boolean,
  onFieldChange: (key: string, value: string) => void,
  onSubmit: () => void,
  payload: ContactT,
  isValid: boolean,
};

const FORM_KEYS = ['name', 'email', 'subject', 'message', 'validation']
const createPayload = () => (FORM_KEYS.reduce((prev, curr) => (
  {
    ...prev,
    [curr]: {
      isValid: true,
      value: '',
    },
  }
), {}))

const ContactForm = ({
  error,
  intl,
  isSubmiting,
  onFieldChange,
  onSubmit,
  payload,
  isValid,
}: PropsT) => {
  const formCssClass = classNames(
    'contact-form-component ui form',
    { error: !isValid || error },
  )
  const submitCssClass = classNames(
    'ui green submit button',
    { loading: isSubmiting },
  )

  return (
    <div className={formCssClass}>
      <div className="two fields">
        <FormField
          label={intl.formatMessage({ id: 'contact.form.name.label' })}
          hasError={!payload.name.isValid}
        >
          <Text
            onChange={value => onFieldChange('name', value)}
            placeholder={intl.formatMessage({ id: 'contact.form.name.placeholder' })}
            value={payload.name.value}
          />
        </FormField>
        <FormField
          label={intl.formatMessage({ id: 'contact.form.email.label' })}
          hasError={!payload.email.isValid}
        >
          <Text
            onChange={value => onFieldChange('email', value)}
            placeholder={intl.formatMessage({ id: 'contact.form.email.placeholder' })}
            type="email"
            value={payload.name.email}
          />
        </FormField>
      </div>
      <FormField
        label={intl.formatMessage({ id: 'contact.form.subject.label' })}
        hasError={!payload.subject.isValid}
      >
        <Text
          onChange={value => onFieldChange('subject', value)}
          placeholder={intl.formatMessage({ id: 'contact.form.subject.placeholder' })}
          value={payload.name.subject}
        />
      </FormField>
      <FormField
        label={intl.formatMessage({ id: 'contact.form.message.label' })}
        hasError={!payload.message.isValid}
      >
        <Textarea
          onChange={value => onFieldChange('message', value)}
          rows="4"
          value={payload.name.message}
        />
      </FormField>
      <FormField
        label={intl.formatMessage({ id: 'contact.form.validation.label' })}
        hasError={!payload.validation.isValid}
      >
        <Text
          onChange={value => onFieldChange('validation', value)}
          value={payload.name.validation}
        />
      </FormField>
      { error && <ErrorMessage error={error} /> }
      <Button className={submitCssClass} onClick={onSubmit}>
        {intl.formatMessage({ id: 'contact.form.send' })}
      </Button>
    </div>
  )
}

export default compose(
  withIntl,
  withState('payload', 'setPayload', createPayload()),
  withState('isValid', 'toggleValid', true),
  withHandlers({
    onFieldChange: ({ payload, setPayload }) => (field, value) => {
      setPayload({
        ...payload,
        [field]: {
          ...payload[field],
          value,
        },
      })
    },
    onSubmit: ({ isSubmiting, onSubmit, payload, setPayload, toggleValid }) => () => {
      if (isSubmiting) {
        return
      }

      const formFields = { ...payload }
      Object
        .keys(formFields)
        .forEach(field => (formFields[field].isValid = !!formFields[field].value))

      if (parseInt(formFields.validation.value, 10) !== 8) {
        formFields.validation.isValid = false
      }

      const isValid = Object
        .keys(formFields)
        .filter(field => !formFields[field].isValid)
        .length === 0
      toggleValid(isValid)

      setPayload({ ...formFields })

      if (!isValid) {
        return
      }

      onSubmit(
        Object
          .keys(formFields)
          .filter(key => key !== 'validation')
          .reduce((prev, curr) => ({
            ...prev,
            [curr]: formFields[curr].value,
          }), {}),
      )
    },
  }),
  lifecycle({
    componentDidMount () {
      this.props.setPayload(createPayload())
    },
  }),
)(ContactForm)
