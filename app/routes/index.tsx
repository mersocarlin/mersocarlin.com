import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import AppLink from '~/components/AppLink'
import Avatar from '~/components/Avatar'
import BlogPostsGrid from '~/components/BlogPostsGrid'
import BlogPostCard from '~/components/BlogPostCard'
import { getLatestBlogPosts } from '~/utils/post.server'

export async function loader() {
  const posts = await getLatestBlogPosts()

  return json(
    { posts },
    {
      headers: {
        'Cache-Control': 'max-age=3600',
      },
      status: 200,
    }
  )
}

export default function Index() {
  const { posts } = useLoaderData<typeof loader>()

  return (
    <div className="flex flex-col mersocarlin-text-gray px-8 md:p-0">
      <section>
        <Avatar size={150} />

        <h1 className="text-center text-3xl font-bold pt-4">Hemerson Carlin</h1>
        <h2 className="text-center">Tech Lead / Software Engineer</h2>
      </section>

      <section className="flex flex-col space-y-4 mt-12">
        <p>Hello there 👋🏼</p>
        <p>
          {`I'm Hemerson Carlin, also know as `}
          <em>mersocarlin</em>, a passionate and resourceful full-stack Software
          Engineer with 10+ years of experience focused on agile development,
          architecture and team building.
        </p>
        <p>
          I have experience in designing and developing web applications using
          microservices architecture alongside with JavaScript, Node.js and
          React.
        </p>
        <p>
          {`I'm Technical Lead at `}
          <AppLink href="https://www.hubspot.com/" target="_blank">
            HubSpot
          </AppLink>{' '}
          and based in Dublin, Ireland.
        </p>
        <p>
          I also created{' '}
          <AppLink href="https://atomicmoney.app" target="_blank">
            Atomic Money
          </AppLink>
          : an expense tracker completely free for you to monitor your income
          and expenses.
        </p>
      </section>

      <section className="mt-12">
        <h3 className="mersocarlin-text-gray font-bold text-xl mb-4">
          Featured blog posts
        </h3>

        <BlogPostsGrid>
          {posts.map((post) => (
            <li
              itemProp="blogPost"
              itemScope={true}
              itemType="https://schema.org/BlogPosting"
              key={post.slug}
            >
              <BlogPostCard post={post} />
            </li>
          ))}
        </BlogPostsGrid>
      </section>
    </div>
  )
}
