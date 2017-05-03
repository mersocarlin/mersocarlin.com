import React from 'react'
import PropTypes from 'prop-types'
import { compose, lifecycle } from 'recompose'
import { connect } from 'react-redux'

import { fetchSocialList as fetchSocialListAction } from '../actions/social'
import { Icon, Image, SocialList } from '../components'

import { withIntl } from '../higher-order'

import './home.scss'

const Home = ({ intl, socialList }) => (
  <div className="page-home">
    <Image src={intl.formatMessage({ id: 'mersocarlin.gravatarUrl' })} />
    <h2 className="myName">
      {intl.formatMessage({ id: 'application.name' })}
    </h2>
    <div className="rubberBand animated myTitle">
      <h3>
        {intl.formatMessage({ id: 'mersocarlin.title' })}
        <Icon icon="code" />
      </h3>
    </div>
    {!socialList.isFetching && <SocialList {...socialList} />}
  </div>
)

Home.propTypes = {
  intl: PropTypes.object.isRequired,
  socialList: PropTypes.object.isRequired,
}

export default compose(
  withIntl,
  connect(state => ({
    socialList: state.socialList,
  }), {
    fetchSocialList: fetchSocialListAction,
  }),
  lifecycle({
    componentDidMount () {
      this.props.fetchSocialList()
    },
  }),
)(Home)
