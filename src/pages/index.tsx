import React from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'
import SocialList from '../components/SocialList'

const Main = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100% - 70rem);
  justify-content: center;
  width: 100%;
`

const Image = styled.img`
  border-radius: 50%;
  border: 3px solid var(--background-text);
  box-shadow: var(--box-shadow-1);
  height: 200px;
  width: 200px;
`

const Title = styled.h1`
  font-size: var(--font-size-h1);
  padding: 0;
  margin: 16rem 0;
`

const Subtitle = styled.h2`
  font-size: var(--font-size-h2);
  margin: 0 0 var(--padding-large) 0;
  padding: 0;
`

interface IndexProps {
  gaId: string
}

export default function Index({ gaId }: IndexProps) {
  return (
    <Layout gaId={gaId}>
      <Main>
        <Image
          alt="mersocarlin"
          src="https://www.gravatar.com/avatar/9d345af079c0e2a554a586c6cad3c20c?s=250"
        />

        <Title>mersocarlin</Title>
        <Subtitle>Software Engineer</Subtitle>

        <SocialList />
      </Main>
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      gaId: process.env.GOOGLE_ANALYTICS_ID,
    },
  }
}
