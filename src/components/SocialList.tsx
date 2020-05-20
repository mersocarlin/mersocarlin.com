import React from 'react'
import styled from 'styled-components'

const items = [
  {
    icon: 'twitter',
    name: 'Twitter',
    url: 'https://twitter.com/mersocarlin',
  },
  {
    icon: 'linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/mersocarlin/en',
  },
  {
    className: 'orange',
    icon: 'stack-overflow',
    name: 'Stack Overflow',
    url: 'https://stackoverflow.com/users/1461131/mersocarlin',
  },
  {
    icon: 'github',
    name: 'Github',
    url: 'https://github.com/mersocarlin',
  },
]

const Main = styled.div`
  justify-content: center;
  width: 100%;
  display: flex;

  a {
    margin: 0 8rem;

    img {
      height: 40rem;
      width: 40rem;
    }
  }
`

export default function SocialList() {
  return (
    <Main>
      {items.map((item) => (
        <a
          href={item.url}
          key={item.icon}
          rel="noopener noreferrer"
          target="_blank"
          title={item.name}
        >
          <img alt={item.name} role="image" src={`/${item.icon}.svg`} />
        </a>
      ))}
    </Main>
  )
}
