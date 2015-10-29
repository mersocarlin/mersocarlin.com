import React from 'react';


import { Strings } from '../constants';


import SocialList from '../components/social-list';


export default React.createClass({

  renderMyImage () {
    return (
      <div className="row text-center">
        <div className="small-8 medium-4 large-4 small-offset-2 medium-offset-4 large-offset-4 columns">
          <img src={Strings.App.GravatarUrl} className="img-avatar bounceInDown animated" alt="" />
        </div>
      </div>
    );
  },

  renderSocialListBySide (side) {
    const socialList = Strings.App.SocialList.filter((social) => {
      return social.side === side || side === -1;
    });

    return <SocialList socialList={socialList} />;
  },

  renderSayMyName () {
    return <h2 className="myName text-center">{Strings.App.AppName}</h2>;
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
            {Strings.App.MyTitle}
            <i className="fa fa-code"></i>
          </h3>
        </div>
      </div>
    );
  },

  render () {
    return (
      <div className="page-home">
        {this.renderMyImage()}
        {this.renderMySocialStuff()}
        {this.renderSayMyTitle()}
      </div>
    );
  }
});
