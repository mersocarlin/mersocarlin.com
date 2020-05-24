import styled from 'styled-components'

const BlogPostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 30px;
  padding: 0 var(--padding-large);

  @media (min-width: 468px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    padding: 0;
  }
`

export default BlogPostsGrid
