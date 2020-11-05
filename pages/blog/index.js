import Link from "next/link";
import posts from "../_posts";

const BlogPage = ({ posts }) => (
  <ul>
    {posts.map((post) => (
      <li key={post.slug}>
        <Link href={`blog/${post.slug}`}>
          <a>{post.title}</a>
        </Link>
      </li>
    ))}
  </ul>
);

export default BlogPage;

export async function getStaticProps() {
  return {
    props: {
      posts,
    },
  };
}
