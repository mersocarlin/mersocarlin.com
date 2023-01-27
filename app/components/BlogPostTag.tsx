import useUserInteraction from '~/hooks/useUserInteraction'

type TagValue = {
  bgColor: string
  textColor: string
  children: React.ReactNode
}

type TagMapT = Record<string, TagValue>

export const tagMap: TagMapT = {
  aspnet: {
    bgColor: 'bg-purple-700',
    textColor: 'text-white',
    children: 'ASP.NET',
  },
  career: {
    bgColor: 'bg-indigo-700',
    textColor: 'text-white',
    children: 'Career',
  },
  'ci/cd': {
    bgColor: 'bg-green-800',
    textColor: 'text-white',
    children: 'CI/CD',
  },
  css: {
    bgColor: 'bg-css',
    textColor: 'text-white',
    children: 'CSS',
  },
  docker: {
    bgColor: 'bg-docker',
    textColor: 'text-white',
    children: 'Docker',
  },
  heroku: {
    bgColor: 'bg-heroku',
    textColor: 'text-white',
    children: 'Heroku',
  },
  javascript: {
    bgColor: 'bg-javascript',
    textColor: 'text-black',
    children: 'JavaScript',
  },
  leadership: {
    bgColor: 'bg-green-500',
    textColor: 'text-white',
    children: 'Leadership',
  },
  nodejs: {
    bgColor: 'bg-nodejs',
    textColor: 'text-white',
    children: 'Node.js',
  },
  personal: {
    bgColor: 'bg-red-400',
    textColor: 'text-white',
    children: 'Personal',
  },
  reactjs: {
    bgColor: 'bg-gray-900',
    textColor: 'text-react',
    children: 'React',
  },
  'styled-components': {
    bgColor: 'bg-styledComponents',
    textColor: 'text-white',
    children: 'styled-components',
  },
  tailwindcss: {
    bgColor: 'bg-tailwindcss',
    textColor: 'text-white',
    children: 'Tailwind CSS',
  },
  testing: {
    bgColor: 'bg-red-500',
    textColor: 'text-white',
    children: 'Testing',
  },
  typescript: {
    bgColor: 'bg-typescript',
    textColor: 'text-white',
    children: 'TypeScript',
  },
  vercel: {
    bgColor: 'bg-black',
    textColor: 'text-white',
    children: 'Vercel',
  },
}

export default function BlogPostTag({
  tag,
  variant,
}: {
  tag: string
  variant: 'bw' | 'color'
}) {
  const { trackTagClick } = useUserInteraction()
  /**
   * Safe-check for tags that don't exist or haven't been added to @tagMap.
   */
  if (!(tag in tagMap)) {
    return null
  }

  const { bgColor, children, textColor } = tagMap[tag]
  const tagStyles =
    variant === 'color'
      ? `${bgColor} ${textColor}`
      : 'bg-gray-200 mersocarlin-text-gray dark:bg-gray-900'

  return (
    <span
      className={`${tagStyles} py-1 px-2 rounded text-sm`}
      onClick={() => trackTagClick(tag)}
    >
      {children}
    </span>
  )
}
