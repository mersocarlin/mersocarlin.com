import { getMDXComponent } from 'mdx-bundler/client'
import { useMemo } from 'react'

const mdxComponents = {
  Img: PostImage,
}

function PostImage(props: JSX.IntrinsicElements['img']) {
  return (
    <figure>
      <img alt="" className="w-full rounded-lg object-cover" {...props} />
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
