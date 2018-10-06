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
      <h1 className="myName">
        {intl.formatMessage({ id: 'application.name' })}
      </h1>
      <div className="rubberBand animated myTitle">
        <h2>
          {intl.formatMessage({ id: 'mersocarlin.title' })}
          <Icon icon="code" />
        </h2>
      </div>

      <SocialList />
    </div>
  )
}

export default withIntl(Home)
