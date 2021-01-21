import { Post } from '@mersocarlin.com/types'
import React from 'react'
import Link from '../Link'
import EditLink from './EditLink'

type Props = {
  post: Post
}

function ContributionBox({ post }: Props) {
  return (
    <div className="p-4 flex mersocarlin-bg-white mersocarlin-border-primary p-4 border-l-4 rounded shadow">
      <div className="w-8 h-8 mersocarlin-text-primary flex-shrink-0">
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <div className="flex-grow pl-6">
        <h2 className="text-gray-900 dark:text-white text-lg font-bold mb-2">
          Did you know you can help me with this page?
        </h2>

        <div className="leading-relaxed font-light text-gray-700 dark:text-gray-100 flex flex-col space-y-4">
          <p>
            If you see something wrong, think this page needs clarification, you
            found a typo or any other suggestion you might have feel free to
            open a PR and I will take care of the rest.
          </p>

          <p>
            My entire site is available to edit on GitHub and all{' '}
            <Link
              href="https://github.com/mersocarlin/mersocarlin.com/blob/master/CONTRIBUTING.md"
              target="_blank"
            >
              contributions
            </Link>{' '}
            are very welcome 🤙🏼.
          </p>

          <p className="mt-3 font-normal">
            <EditLink post={post} />
          </p>
        </div>
      </div>
    </div>
  )
}

export default ContributionBox
