import React from 'react'
import styled from 'styled-components'
import { GetStaticProps } from 'next'

import Layout from '@mersocarlin.com/components/Layout'
import Meta from '@mersocarlin.com/components/Meta'

const Main = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: var(--padding-large);
  width: 100%;

  @media (min-width: 768px) {
    margin: 0 auto;
    padding: 0;
    width: 600px;
  }
`

const Image = styled.img`
  border-radius: 50%;
  border: 3px solid var(--background-text);
  box-shadow: var(--box-shadow-1);
  height: 200px;
  width: 200px;
`

const Title = styled.h1`
  font-size: 30rem;
  margin: 16rem 0 0 0;
  padding: 0;
  text-align: center;

  @media (min-width: 768px) {
    font-size: var(--font-size-h1);
  }
`

const Subtitle1 = styled.h2`
  font-size: 20rem;
  line-height: 1.2;
  margin: var(--padding-large) 0;
  padding: 0;
  text-align: center;

  @media (min-width: 768px) {
    font-size: var(--font-size-h3);
  }
`

interface IndexProps {
  gaId: string
}

export default function Index({ gaId }: IndexProps) {
  return (
    <Layout centerContent gaId={gaId}>
      <Meta />

      <Main>
        <Image alt="mersocarlin" src={`/hemerson-dark.jpg`} />

        <Title>Hello there 👋🏼</Title>
        <Subtitle1>
          I'm Hemerson Carlin, also known as <em>mersocarlin</em>, and I'm a
          Full Stack JavaScript Developer from Brazil based in Dublin, Ireland.
        </Subtitle1>
      </Main>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      gaId: process.env.GOOGLE_ANALYTICS_ID,
    },
  }
}
