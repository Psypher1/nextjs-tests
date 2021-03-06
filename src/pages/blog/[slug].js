import { articles } from "../../../articles";
import styles from "../../styles/Article.module.css";
import Link from "next/link";

export async function getStaticPaths() {
  // const res = await fetch(articles);
  // const articles = await res.json();
  const posts = await articles;
  // console.log(posts);
  const paths = posts.map((article) => ({
    params: {
      slug: article.slug,
    },
  }));
  // const paths = posts.map(({ slug }) => `/blog/${slug}`);

  // console.log(paths);

  return {
    paths,
    fallback: false,
  };
}
/* I HAVE MAJOR QUERIES ABOUT THIS
YES IT'S WORKING, BUT I BELIEVE THERE IS A BETTER WAY
*/
export async function getStaticProps({ params }) {
  const { slug } = params;
  // console.log(params);
  // console.log("Slug: ");
  // console.log(slug);

  /* HOW AM I SUPPOSED TO USE THE SLUG TO GET THE POST*/

  // this causes infinite load
  // const res = await fetch(`http://localhost:3000/blog/${slug}`);
  // const data = res.json();
  // const article = data[0];

  // console.log(articles);
  const post = articles.filter((article) => {
    return article.slug == slug;
  });

  // what's the step before this though?
  // const article = articles[0];
  // console.log(article);
  const article = post[0];
  return {
    props: {
      article,
    },
  };
}

export default function ArticleDetail({ article }) {
  console.log(article);
  return (
    <div className={styles.article}>
      <h5> Single Article Page</h5>
      <h2 className={styles.title}>{article.title}</h2>
      <p className={styles.content}>{article.description}</p>
      <br />
      <div className={styles.links}>
        <Link href="/blog">
          <a className={styles.back}> {"<Back to Blog"}</a>
        </Link>
        <Link href="/">
          <a className={styles.back}> {"<Home"}</a>
        </Link>
      </div>
    </div>
  );
}
