import React from 'react'
import styled from 'styled-components'

import Divider from '../Divider'
import Link from '../Link'

import Pre from './Pre'
import Header from './Header'
import Image from './Image'

const BlogPostLink = styled(Link)`
  font-size: 1.125rem;
  line-height: 1.5;
`

const components = {
  a: BlogPostLink,
  h2: (props: any) => <Header as="h2" {...props} />,
  h3: (props: any) => <Header as="h3" {...props} />,
  hr: (props: any) => <Divider size={30} {...props} />,
  img: Image,
  pre: Pre,
}

export default components
