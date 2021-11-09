import Link from "next/link";
import styles from "../../styles/Home.module.css";
// import article data from file
import { articles } from "../../../articles";

// import article data from json file
// import posts from "../../../posts.json";

// const posts = [
//   { title: "First post", slug: "first", description: "this is my first post" },
//   { title: "Second post", slug: "secong", description: "my second post" },
// ];

Blog.title = "Blog";
export default function Blog({ posts }) {
  return (
    <div className={styles.container}>
      <h1>Articles</h1>
      {/* map through posts data and ouput titles */}
      {posts &&
        posts.map((article) => (
          <div className="blog-list" key={article.slug}>
            <Link href={`/blog/${article.slug}`}>
              <a className="blog-item">{article.title}</a>
            </Link>
          </div>
        ))}
    </div>
  );
}

// fetch article data from file
export async function getStaticProps() {
  // const res = await fetch(posts);
  // const articles = res.json();
  // console.log(articles);
  const posts = await articles;
  // console.log(posts);
  return {
    props: {
      posts,
    },
  };
}
