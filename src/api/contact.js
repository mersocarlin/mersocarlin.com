import { ContactException } from './exceptions'
import { env, strings } from '../config'

const SAFE_LENGTH = 5000

async function sendContact (payload) {
  const body = {
    name: payload.name,
    email: payload.email,
    subject: payload.subject,
    content: payload.message,
  }

  const isBigMessage = Object
    .keys(body)
    .filter(key => body[key].length > SAFE_LENGTH)
    .length > 0

  if (isBigMessage) {
    throw new ContactException(strings.contact.form.bigMessage)
  }

  // eslint-disable-next-line no-undef
  const response = await fetch(`${env.apiService.url}api/messages`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  const data = await response.json()

  if (data.status_code) {
    throw new ContactException(data.error_message || response.statusText)
  }
}

export default {
  sendContact: sendContact.bind(this),
}
