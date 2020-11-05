import posts from "../_posts";

// This post argument is passed from getStaticProps
const BlogPost = ({ post }) => (
  <article>
    <h1>{post.title}</h1>
    <p>{post.date}</p>
  </article>
);
export default BlogPost;

export async function getStaticPaths() {
  return {
    // Map all the posts to objects with the slug in the params object
    // since we want all our pages to be accessible, the paths array
    // needs to contain a list of all the posts slugs
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      // Since our slug should be unique we can use
      // it to find the post with the matching slug,
      // this will be the post we need to render
      post: posts.find((post) => post.slug === params.slug),
    },
  };
}
