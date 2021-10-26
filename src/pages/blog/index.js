import Link from "next/link";
// import article data from file
import { articles } from "../../../articles";

// import article data from json file
// import posts from "../../../posts.json";

// const posts = [
//   { title: "First post", slug: "first", description: "this is my first post" },
//   { title: "Second post", slug: "secong", description: "my second post" },
// ];

export default function BlogList({ posts }) {
  return (
    <div>
      <h1>Blogs Go Here</h1>
      {/* map through posts data and ouput titles */}
      {posts.map((article) => (
        <div className="blog-list" key={article.slug}>
          <Link href={`blog/${article.slug}`}>
            <a className="blog-item">{article.title}</a>
          </Link>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  // const res = await fetch(posts);
  // const articles = res.json();
  // console.log(articles);
  const posts = await articles;
  // console.log(posts);
  return {
    props: {
      posts
    },
  };
}
