import React from 'react'

import Divider from '../Divider'
import Link from '../Link'
import Header from './Header'
import Image from './Image'

const components = {
  a: Link,
  blockquote: (props: any) => (
    <blockquote
      className="border-l-4 border-gray-500 dark:border-gray-200 mb-4 p-4"
      {...props}
    />
  ),
  code: (props: any) => <code data-test-id="test" {...props} />,
  del: (props: any) => <del className="italic" {...props} />,
  h2: (props: any) => <Header as="h2" {...props} />,
  h3: (props: any) => <Header as="h3" {...props} />,
  hr: (props: any) => <Divider size={30} {...props} />,
  img: Image,
  ol: (props: any) => <ol className="ml-8 mb-3 list-disc" {...props} />,
  p: (props: any) => <p className="mb-3 leading-7" {...props} />,
  pre: (props: any) => (
    <pre className="rounded overflow-hidden mb-3 text-sm" {...props} />
  ),
  table: (props: any) => (
    <table
      className="border-collapse border w-full bg-white dark:bg-gray-700 mb-3"
      {...props}
    />
  ),
  td: (props: any) => (
    <td
      className="border border-gray-500 dark:border-gray-200 font-normal p-2"
      {...props}
    />
  ),
  th: (props: any) => (
    <th
      className="border border-gray-500 dark:border-gray-200 font-bold p-2"
      {...props}
    />
  ),
  thead: (props: any) => (
    <thead className="bg-gray-800 text-white dark:bg-gray-500" {...props} />
  ),
  ul: (props: any) => <ul className="ml-8 mb-3 list-disc" {...props} />,
}

export default components
