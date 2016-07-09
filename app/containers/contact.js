import React, { Component } from 'react';
import { connect } from 'react-redux';


import config from '../env/config';
import { resetContactForm, sendContactForm } from '../actions/contact';
import { fetchSocialList } from '../actions/social';
import { Strings } from '../constants';


import ContactForm from '../components/contact-form';
import Map from '../components/map';
import SocialItem from '../components/social-item';


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
              {Strings.Contact.Feedback.Header}
            </div>
            <div className="meta">
              <span className="category">
                {Strings.Contact.Feedback.Message1}
                <i className="send icon"></i>
              </span>
            </div>
            <div className="description">
              <p>{Strings.Contact.Feedback.Message2}</p>
              <p>{Strings.Contact.Feedback.Message3}</p>
            </div>
          </div>
          <div className="extra content">
            <span className="left floated like">
              <img className="ui avatar image" src={Strings.App.GravatarUrl} />
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
          onSubmit={::this.onSubmit}
        />
      </div>
    );
  }

  render () {
    const { contact: { mapCenter: { lat, lng } } } = config;
    const { sendContact, socialList } = this.props;

    return (
      <div className="page-contact">
        <div className="ui text container">
          <div className="column">
            <h1 className="ui header">{Strings.Contact.Title}</h1>
          </div>
          {this.renderContactSentCard(sendContact)}
          {this.renderContactForm(sendContact)}
        </div>
        <div>
          <Map
            centerLat={parseFloat(lat)}
            centerLng={parseFloat(lng)}
            zoom={15}
          />
        </div>
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
