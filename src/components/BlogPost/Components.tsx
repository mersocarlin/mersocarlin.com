import React from 'react'

import Divider from '../Divider'
import Link from '../Link'
import Header from './Header'
import Image from './Image'

const components = {
  a: ({ href, ...rest }: any) => {
    const isAnchorLink = href.startsWith('#')

    return (
      <Link
        {...rest}
        href={href}
        target={isAnchorLink ? undefined : '_blank'}
      />
    )
  },
  blockquote: (props: any) => (
    <blockquote
      className="border-l-4 mersocarlin-border-gray mb-4 p-4"
      {...props}
    />
  ),
  code: (props: any) => <code {...props} />,
  del: (props: any) => <del className="italic" {...props} />,
  h2: (props: any) => <Header as="h2" {...props} />,
  h3: (props: any) => <Header as="h3" {...props} />,
  hr: (props: any) => <Divider size={30} {...props} />,
  img: Image,
  ol: (props: any) => <ol className="ml-8 mb-3 list-decimal" {...props} />,
  p: (props: any) => <p className="mb-3 leading-7" {...props} />,
  pre: (props: any) => (
    <pre className="rounded overflow-hidden mb-3 text-sm" {...props} />
  ),
  table: (props: any) => (
    <table
      className="border-collapse border w-full mersocarlin-bg-white mb-3"
      {...props}
    />
  ),
  td: (props: any) => (
    <td className="border mersocarlin-border-gray font-normal p-2" {...props} />
  ),
  th: (props: any) => (
    <th className="border mersocarlin-border-gray font-bold p-2" {...props} />
  ),
  thead: (props: any) => (
    <thead className="bg-gray-800 text-white dark:bg-gray-500" {...props} />
  ),
  ul: (props: any) => <ul className="ml-8 mb-3 list-disc" {...props} />,
}

export default components
