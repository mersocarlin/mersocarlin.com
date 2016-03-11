import React, { Component, PropTypes } from 'react';


export default class SocialList extends Component {
  static propTypes: {
    socialList: PropTypes.array,
  }

  render () {
    return (
      <div className="social-list">
        <ul className="inline-list">
          {
            this.props.socialList.map((social, index) => {
              return (
                <li key={index}>
                  <a target="_blank" href={social.url}>
                    <i className={`fa fa-${social.icon}`}></i>
                  </a>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}
