import React from 'react'
import styled from 'styled-components'

import Link from './Link'

const Main = styled.div`
  font-size: 16rem;
  margin-bottom: var(--padding-xlarge);
  text-align: right;
`

export default function PreviousBlogPosts() {
  return (
    <Main>
      <Link as="/blog" href="/blog">
        View all blog posts ➡️
      </Link>
    </Main>
  )
}
