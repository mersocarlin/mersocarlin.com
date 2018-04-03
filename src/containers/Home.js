// @flow
import React from 'react'

import { Icon, Image, SocialList } from '../components'
import { withIntl } from '../higher-order'
import type { IntlT } from '../types'

import './Home.css'

type PropsT = {
  intl: IntlT,
}

function Home({ intl }: PropsT) {
  return (
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

      <SocialList />
    </div>
  )
}

export default withIntl(Home)
