import React from 'react'
import styled from 'styled-components'
import { GetStaticProps } from 'next'
import NextImage from 'next/image'

import Layout from '@mersocarlin.com/components/Layout'
import Meta from '@mersocarlin.com/components/Meta'
import { PageProps } from '@mersocarlin.com/types'

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

const Image = styled(NextImage)`
  && {
    border-radius: 50%;
    border: 3px solid var(--background-text) !important;
    box-shadow: var(--box-shadow-1);
  }
`

const Title = styled.h1`
  font-size: 1.875rem;
  margin: 1rem 0 0 0;
  padding: 0;
  text-align: center;
`

const Subtitle1 = styled.h2`
  font-size: var(--font-size-h2);
  line-height: 1.5;
  margin: var(--padding-large) 0;
  padding: 0;
  text-align: center;
`

export default function Index({ gaId, appVersion }: PageProps) {
  return (
    <Layout appVersion={appVersion} centerContent gaId={gaId}>
      <Meta />

      <Main>
        <Image
          alt="mersocarlin"
          height={200}
          src="/hemerson-dark.jpg"
          width={200}
        />

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
  const pkg = require('../../package.json')

  return {
    props: {
      appVersion: pkg.version,
      gaId: process.env.GOOGLE_ANALYTICS_ID,
    },
  }
}
