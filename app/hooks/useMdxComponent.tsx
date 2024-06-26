import { getMDXComponent } from 'mdx-bundler/client/index.js'
import { useMemo } from 'react'
import AppLink from '~/components/AppLink'

const mdxComponents = {
  Img: PostImage,
  a: AppLink,
}

function PostImage(props: JSX.IntrinsicElements['img']) {
  return (
    <figure>
      <img
        alt={props.alt}
        className="mx-auto rounded-lg object-cover"
        {...props}
      />
      <figcaption className="text-center mersocarlin-text-gray">
        {props.alt}
      </figcaption>
    </figure>
  )
}

function getMdxComponent(code: string) {
  const Component = getMDXComponent(code)

  function MersocarlinMdxComponent({
    components,
    ...rest
  }: Parameters<typeof Component>['0']) {
    return (
      <Component components={{ ...mdxComponents, ...components }} {...rest} />
    )
  }
  return MersocarlinMdxComponent
}

export default function useMdxComponent(code: string) {
  return useMemo(() => getMdxComponent(code), [code])
}
