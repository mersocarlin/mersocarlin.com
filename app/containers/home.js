import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchSocialList } from '../actions/social';

import { Strings } from '../constants';

import Image from '../components/image';
import SocialItem from '../components/social-item';


class Home extends Component {
  componentWillMount () {
    this.props.dispatch(fetchSocialList());
  }

  renderMyImage () {
    return (
      <Image
        className="ui medium circular image fadeIn animated"
        src={Strings.App.GravatarUrl}
      />
    );
  }

  renderSayMyName () {
    return <h2 className="myName">{Strings.App.AppName}</h2>;
  }

  renderSayMyTitle () {
    return (
      <div className="rubberBand animated myTitle">
        <h3>
          {Strings.App.MyTitle}
          <i className="code icon"></i>
        </h3>
      </div>
    );
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

  render () {
    const { socialList } = this.props;

    return (
      <div className="page-home">
        {this.renderMyImage()}
        {this.renderSayMyName()}
        {this.renderSayMyTitle()}
        {!socialList.isFetching && this.renderSocialList(socialList)}
      </div>
    );
  }
}


export default connect(state => {
  return {
    socialList: state.socialList,
  };
})(Home);
