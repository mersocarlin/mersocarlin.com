import ApiClient from './api-client';
import { Strings } from '../constants';

const serviceUrl = 'api/messages';
const SAFE_LENGTH = 5000;


export async function sendContact (payload) {
  const body = {
    name: payload.name,
    email: payload.email,
    subject: payload.subject,
    content: payload.message,
  };

  const isBigMessage = Object
    .keys(body)
    .filter(key => body[key].length > SAFE_LENGTH)
    .length > 0;

  if (isBigMessage) {
    throw new Error(Strings.Contact.Form.BigMessage);
  }

  const options = {
    data: body,
    url: serviceUrl,
  };

  const { data } = await ApiClient.post(options);

  return data;
}
