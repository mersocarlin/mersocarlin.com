import React from 'react';

export default React.createClass({

  propTypes: {
    socialList: React.PropTypes.array
  },

  getDefaultProps () {
    return {
      socialList: []
    };
  },

  render () {
    return (
      <div className="social-list">
        <ul className="inline-list">
          {
            this.props.socialList.map((social, index) => {
              return (
                <li key={index}>
                  <a target='_blank' href={social.url}>
                    <i className={`fa fa-${social.icon}`}></i>
                  </a>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
});
