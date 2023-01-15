import { socialListItems } from '~/utils/social'

export default function SocialList({ size = 30 }: { size?: number }) {
  return (
    <div className="flex justify-between">
      {socialListItems.map((item) => (
        <a
          key={item.icon}
          className="mx-2 flex items-center"
          href={item.url}
          rel="noreferrer"
          target="_blank"
          title={item.name}
        >
          <img
            alt={item.name}
            height={size}
            src={`/${item.icon}.svg`}
            width={size}
          />
        </a>
      ))}
    </div>
  )
}
