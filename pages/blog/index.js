import Link from "next/link"
import styled from "styled-components"
import posts from "../_posts"

const Main = styled.main`
  max-width: 56em;
  padding: 0.8em;
  margin: 0 auto;
`

const Ul = styled.ul`
  padding: 0;
`

const Li = styled.li`
  display: block;
`

// Create a flex box wrapper that can group our blog post attributes
const BlogLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid gray;
  transition: margin-left 0.2s ease;

  &:hover {
    margin-left: 20px;
  }
`

// Notice here on the Link element that we do not need passHref,
// that's possible because the anchor tag is the direct child
// of the Link element
const BlogPage = ({ posts }) => (
  <Main>
    <Ul>
      {posts.map((post) => (
        <Li key={post.slug}>
          <Link href={`blog/${post.slug}`}>
            <a>
              <BlogLink>
                <h3>{post.title}</h3>
                <h5>{post.date}</h5>
              </BlogLink>
            </a>
          </Link>
        </Li>
      ))}
    </Ul>
  </Main>
)

export default BlogPage

export async function getStaticProps() {
  return {
    props: {
      posts,
    },
  }
}
