import Link from "next/link";
import { articles } from "../../../articles";

const posts = [
  { title: "First post", slug: "first", description: "this is my first post" },
  { title: "Second post", slug: "secong", description: "my second post" },
];

export default function BlogList({ articles }) {
  return (
    <div>
      <h1>Blogs Go Here</h1>

      {articles.map((post) => (
        <div className="blog-list">
          <Link key={post.slug} href={`blog/${post.slug}`}>
            {post.title}
          </Link>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  // console.log(articles);
  return {
    props: {
      articles,
    },
  };
}
