import { default as api } from '../api';

export const SEND_CONTACT_REQUEST = 'SEND_CONTACT_REQUEST';
export const SEND_CONTACT_SUCCESS = 'SEND_CONTACT_SUCCESS';
export const SEND_CONTACT_FAILURE = 'SEND_CONTACT_FAILURE';
export const RESET_CONTACT_FORM = 'RESET_CONTACT_FORM';

export function resetContactForm () {
  return { type: RESET_CONTACT_FORM };
}

export function sendContactForm (payload) {
  return async dispatch => {
    dispatch({ type: SEND_CONTACT_REQUEST });
    try {
      await api.contact.sendContact(payload);
      dispatch({ type: SEND_CONTACT_SUCCESS, data: true });
    } catch (error) {
      dispatch({ type: SEND_CONTACT_FAILURE, error });
    }
  };
}
