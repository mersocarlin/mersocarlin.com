import React from 'react';
import SocialList from '../components/social-list';

export default React.createClass({

  propTypes: {
    socialList: React.PropTypes.array,
    myName: React.PropTypes.string
  },

  getDefaultProps () {
    return {
      socialList: [
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/mersocarlin/en',
          icon: 'linkedin',
          side: 0
        },
        {
          name: 'Email',
          url: 'mailto:mersocarlin@mersocarlin.com',
          icon: 'envelope-o',
          side: 0
        },
        {
          name: 'Github',
          url: 'https://github.com/mersocarlin',
          icon: 'github',
          side: 1
        },
        {
          name: 'Twitter',
          url: 'http://www.twitter.com/mersocarlin',
          icon: 'twitter',
          side: 1
        }
      ],
      imgUrl: 'https://s.gravatar.com/avatar/9d345af079c0e2a554a586c6cad3c20c?s=300',
      sayMyName: 'mersocarlin',
      sayMyTitle: 'Software Enginner'
    }
  },

  renderMyImage () {
    return (
      <div className="row text-center">
        <div className="small-8 medium-4 large-4 small-offset-2 medium-offset-4 large-offset-4 columns">
          <img src={this.props.imgUrl} className="img-avatar bounceInDown animated" alt="" />
        </div>
      </div>
    );
  },

  renderSocialListBySide (side) {
    var socialList = this.props.socialList.filter((social) => {
      return social.side === side || side === -1;
    });
    return <SocialList socialList={socialList}/>;
  },

  renderSayMyName () {
    return <h2 className="myName text-center">{this.props.sayMyName}</h2>;
  },

  renderMySocialStuff () {
    return (
      <div className="row bounceInUp animated mySocial">
        <div className="small-10 medium-8 large-8 small-offset-1 medium-offset-2 large-offset-2 columns">
          <div className="row">
            <div className="hide-for-small-only medium-3 large-3 columns columns-social">
              {this.renderSocialListBySide(0)}
            </div>
            <div className="small-12 medium-6 large-6 columns columns-social">
              {this.renderSayMyName()}
            </div>
            <div className="hide-for-small-only medium-3 large-3 columns columns-social">
              {this.renderSocialListBySide(1)}
            </div>
          </div>
          <div className="row show-for-small-only">
            <div className="small-12">
              {this.renderSocialListBySide(-1)}
            </div>
          </div>
        </div>
      </div>
    );
  },

  renderSayMyTitle () {
    return (
      <div className="row text-center rubberBand animated myTitle">
        <div className="small-12 medium-8 large-8 medium-offset-2 large-offset-2 columns">
          <h3>
            {this.props.sayMyTitle}
            <i className="fa fa-code"></i>
          </h3>
        </div>
      </div>
    );
  },

  render () {
    return (
      <div className="app-mersocarlin">
        {this.renderMyImage()}
        {this.renderMySocialStuff()}
        {this.renderSayMyTitle()}
      </div>
    );
  }
});
