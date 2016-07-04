import ApiClient from './api-client';


const serviceUrl = 'api/messages';


export async function sendContact (payload) {
  const body = {
    name: payload.name,
    email: payload.email,
    subject: payload.subject,
    content: payload.message,
  };

  const options = {
    data: body,
    url: serviceUrl,
  };

  const { data } = await ApiClient.post(options);

  return data;
}
