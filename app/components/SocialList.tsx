import { socialListItems } from '~/utils/social'
import {
  GithubIcon,
  LinkedInIcon,
  RssIcon,
  StackOverflowIcon,
  TwitterIcon,
} from './Icons'

const LINK_CLASS_NAME =
  'mx-2 flex items-center focus:outline-none mersocarlin-text-gray hover:mersocarlin-text-primary'

export default function SocialList({ size = 30 }: { size?: number }) {
  return (
    <div className="flex justify-between">
      {socialListItems.map((item) => (
        <a
          key={item.icon}
          className={LINK_CLASS_NAME}
          href={item.url}
          rel="noreferrer"
          target="_blank"
          title={item.name}
        >
          {item.icon === 'twitter' && (
            <TwitterIcon height={size} width={size} />
          )}
          {item.icon === 'linkedin' && (
            <LinkedInIcon height={size} width={size} />
          )}
          {item.icon === 'github' && <GithubIcon height={size} width={size} />}
          {item.icon === 'stack-overflow' && (
            <StackOverflowIcon height={size} width={size} />
          )}
        </a>
      ))}

      <a className={LINK_CLASS_NAME} href="/blog/rss.xml" title="RSS">
        <RssIcon height={size} width={size} />
      </a>
    </div>
  )
}
