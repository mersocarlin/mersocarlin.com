// @flow
import React from 'react'
import { compose, lifecycle } from 'recompose'
import { connect } from 'react-redux'

import { SocialActionCreators } from '../actions'
import { Icon, Image, SocialList } from '../components'
import { withIntl } from '../higher-order'
import type { IntlT, SocialListReducerT } from '../types'

import './home.css'

type PropsT = {
  intl: IntlT,
  socialList: SocialListReducerT,
}

const Home = ({ intl, socialList }: PropsT) => (
  <div className="page-home">
    <Image src={intl.formatMessage({ id: 'mersocarlin.gravatarUrl' })} />
    <h2 className="myName">{intl.formatMessage({ id: 'application.name' })}</h2>
    <div className="rubberBand animated myTitle">
      <h3>
        {intl.formatMessage({ id: 'mersocarlin.title' })}
        <Icon icon="code" />
      </h3>
    </div>
    {!socialList.isFetching && <SocialList {...socialList} />}
  </div>
)

export default compose(
  withIntl,
  connect(
    state => ({
      socialList: state.socialList,
    }),
    {
      fetchSocialList: SocialActionCreators.fetchSocialList,
    }
  ),
  lifecycle({
    componentDidMount() {
      this.props.fetchSocialList()
    },
  })
)(Home)
