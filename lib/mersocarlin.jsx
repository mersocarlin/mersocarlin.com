var React = require("react");
var SocialList = require('../app/components/social-list.jsx');

require("../app/main.scss");


module.exports = React.createClass({

  propTypes: {
    socialList: React.PropTypes.array,
    myName: React.PropTypes.string
  },

  getDefaultProps () {
    return {
      socialList: [
        {
          name: '00',
          url: 'https://www.linkedin.com/in/mersocarlin/en',
          icon: 'linkedin',
          side: 0
        },
        {
          name: '00',
          url: 'mailto:mersocarlin@mersocarlin.com',
          icon: 'envelope-o',
          side: 0
        },
        {
          name: '00',
          url: 'http://www.facebook.com/mersocarlin',
          icon: 'facebook',
          side: 1
        },
        {
          name: '00',
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
        <div className="small-8 medium-8 large-8 small-offset-2 medium-offset-2 large-offset-2 columns">
          <img src={this.props.imgUrl} className="img-avatar bounceInDown animated" alt="" />
        </div>
      </div>
    );
  },

  renderSocialListBySide (side) {
    var socialList = this.props.socialList.filter((social) => {
      return social.side === side;
    });
    return <SocialList socialList={socialList}/>;
  },

  renderSayMyName () {
    return <h2 className="myName">{this.props.sayMyName}</h2>;
  },

  renderMySocialStuff () {
    return (
      <div className="row bounceInUp animated">
        <div className="small-8 medium-8 large-8 small-offset-2 medium-offset-2 large-offset-2 columns">
          <div className="row">
            <div className="small-4 medium-4 large-4 columns">
              {this.renderSocialListBySide(0)}
            </div>
            <div className="small-4 medium-4 large-4 columns">
              {this.renderSayMyName()}
            </div>
            <div className="small-4 medium-4 large-4 columns">
              {this.renderSocialListBySide(1)}
            </div>
          </div>
        </div>
      </div>
    );
  },

  renderSayMyTitle () {
    return (
      <div className="row text-center rubberBand animated">
        <div className="small-8 medium-8 large-8 small-offset-2 medium-offset-2 large-offset-2 columns">
          <h3 className="myTitle">
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
