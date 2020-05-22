import React from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'
import SocialList from '../components/SocialList'

const Main = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
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
  margin: 16rem 0 0 0;
  padding: 0;
  text-align: center;
`

const Subtitle1 = styled.h2`
  font-size: var(--font-size-h2);
  margin: var(--padding-large) 0;
  padding: 0;
  text-align: center;
`

const Subtitle2 = styled.h3`
  font-size: var(--font-size-h3);
  margin: 0 0 var(--padding-xlarge) 0;
  padding: 0;
  text-align: center;
`

interface IndexProps {
  gaId: string
}

export default function Index({ gaId }: IndexProps) {
  return (
    <Layout fullHeight gaId={gaId}>
      <Main>
        <Image alt="mersocarlin" src={`/hemerson-dark.jpg`} />

        <Title>Hi there 👋🏼</Title>
        <Subtitle1>My name is Hemerson</Subtitle1>
        <Subtitle2>I'm a Software Engineer</Subtitle2>

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
