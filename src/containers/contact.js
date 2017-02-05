import React, { Component } from 'react';
import { connect } from 'react-redux';


import { env } from '../config';
import { resetContactForm, sendContactForm } from '../actions/contact';
import { fetchSocialList } from '../actions/social';
import { strings } from '../config';


import ContactForm from '../components/contact-form';
import Map from '../components/map';
import SocialItem from '../components/social-item';
import './contact.scss';

class Contact extends Component {
  constructor () {
    super();
    this.state = {
      hasError: false,
      errorFields: {
        name: false,
        email: false,
        subject: false,
        message: false,
      },
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount () {
    this.props.dispatch(fetchSocialList());
  }

  componentWillUnmount () {
    this.props.dispatch(resetContactForm());
  }

  onSubmit (payload) {
    this.props.dispatch(sendContactForm(payload));
  }

  renderSocialList ({ items }) {
    return (
      <div className="social-list">
        {
          items.map((item, index) => {
            return (
              <SocialItem
                key={index}
                item={item}
              />
            );
          })
        }
      </div>
    );
  }

  renderContactSentCard ({ contactSent }) {
    if (!contactSent) return null;

    return (
      <div className="ui column centered grid contact-sent bounceIn animated">
        <div className="ui card">
          <div className="content">
            <div className="header">
              {strings.contact.feedback.header}
            </div>
            <div className="meta">
              <span className="category">
                {strings.contact.feedback.message1}
                <i className="send icon"></i>
              </span>
            </div>
            <div className="description">
              <p>{strings.contact.feedback.message2}</p>
              <p>{strings.contact.feedback.message3}</p>
            </div>
          </div>
          <div className="extra content">
            <span className="left floated like">
              <img alt="" className="ui avatar image" src={strings.app.gravatarUrl} />
              <a href="http://www.twitter.com/mersocarlin" target="_blank">@mersocarlin</a>
            </span>
          </div>
        </div>
      </div>
    );
  }

  renderContactForm ({ contactSent, error, isSubmiting }) {
    if (contactSent) return null;

    return (
      <div className="column">
        <ContactForm
          error={error}
          isSubmiting={isSubmiting}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }

  render () {
    const { google: { mapsApiKey },  map: { center } } = env;
    const { sendContact, socialList } = this.props;

    return (
      <div className="page-contact">
        <div className="ui text container">
          <div className="column">
            <h1 className="ui header">{strings.contact.title}</h1>
          </div>
          {this.renderContactSentCard(sendContact)}
          {this.renderContactForm(sendContact)}
        </div>
        <Map
          apiKey={mapsApiKey}
          center={center}
          zoom={13}
        />
        {!socialList.isFetching && this.renderSocialList(socialList)}
      </div>
    );
  }
}


export default connect(state => {
  return {
    sendContact: state.sendContact,
    socialList: state.socialList,
  };
})(Contact);
