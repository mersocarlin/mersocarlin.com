import { combineReducers } from 'redux';


import sendContact from './send-contact';
import socialList from './social-list';


const rootReducer = combineReducers({
  sendContact,
  socialList,
});


export default rootReducer;
