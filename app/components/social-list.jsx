var React = require('react');
require("../styles/components/social-list.scss");

module.exports = React.createClass({

  propTypes: {
    socialList: React.PropTypes.array
  },

  getDefaultProps () {
    return {
      socialList: []
    };
  },

  render () {
    /*
     <ul class="brands brands-inline hidden-xs">
     <li><a target="_blank" href="https://www.linkedin.com/in/mersocarlin/en"><i class="fa fa-linkedin"></i></a></li>
     <li><a target="_blank" href="mailto:mersocarlin@mersocarlin.com"><i class="fa fa-envelope-o"></i></a></li>
     </ul>
     <h2 class="scrollpoint">mersocarlin</h2>
     <ul class="brands brands-inline hidden-xs scrollpoint">
     <li><a target="_blank" href="http://www.facebook.com/mersocarlin"><i class="fa fa-facebook  hi-icon-effect-8"></i></a></li>
     <li><a target="_blank" href="http://www.twitter.com/mersocarlin"><i class="fa fa-twitter"></i></a></li>
     </ul>
    * */

    return (
      <div className="social-list">
        <ul className="inline-list">
          {
            this.props.socialList.map((social) => {
              return <li>
                      <a target='_blank' href={social.url}>
                        {social.name}
                        <i className={`fa fa-${social.icon}`}></i>
                      </a>
                     </li>
            })
          }
        </ul>
      </div>
    );
  }
});
