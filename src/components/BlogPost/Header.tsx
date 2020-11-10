import React from 'react'
import styled from 'styled-components'

const StyledH2 = styled.h2`
  font-size: var(--font-size-h2);
  margin: var(--padding-xlarge) 0;
`

const StyledH3 = styled.h3`
  font-size: var(--font-size-h3);
  margin: var(--padding-xlarge) 0;
`

interface Props {
  as?: string
  children: string
}

function BlogPostHeader({ as = 'h2', children }: Props) {
  const Component = as === 'h2' ? StyledH2 : StyledH3
  const idAttr = children
    .toLowerCase()
    .replace(/\s/g, '-')
    .replace(/[^a-z0-9-]/g, '')

  return <Component id={idAttr}>{children}</Component>
}

export default BlogPostHeader
