import styled from "styled-components"
import posts from "../_posts"
import Head from "next/head"

const Article = styled.article`
  max-width: 56em;
  padding: 0.8em;
  margin: 0 auto;
`

const BlogPost = ({ post }) => (
  <Article>
    <Head><link
      rel="stylesheet"
      href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.1.2/styles/atom-one-dark-reasonable.min.css"
    /></Head>
    <h1>{post.attributes.title}</h1>
    <p>{post.attributes.date}</p>
    <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.html }}></div>
  </Article>
)
export default BlogPost

export async function getStaticPaths() {
  return {
    paths: posts.map((post) => ({ params: { slug: post.attributes.slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  return {
    props: {
      post: posts.find((post) => post.attributes.slug === params.slug),
    },
  }
}
