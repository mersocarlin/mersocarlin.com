import React from 'react'

import Avatar from '@common/components/Avatar'

function BlogPostAuthor() {
  return (
    <div className="flex md:items-center">
      <Avatar size={100} />

      <div className="flex-1 ml-4">
        <p className="mersocarlin-text-gray font-light text-lg">
          <strong>Hemerson Carlin</strong>, also known as <em>mersocarlin</em>,
          is passionate and resourceful full-stack Software Engineer with 10+
          years of experience focused on agile development, architecture and
          team building.
        </p>

        <p className="mersocarlin-text-gray font-light text-lg">
          This is the space to share the things he likes, a couple of ideas and
          some of his work.
        </p>
      </div>
    </div>
  )
}

export default BlogPostAuthor
