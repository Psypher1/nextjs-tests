import { articles } from "../../../articles";

export default function ArticleDetail({ article }) {
  // console.log(articles);
  return (
    <div>
      <h1> Single Article Page</h1>
      <h2>{article.title}</h2>
      <p>{article.description}</p>
    </div>
  );
}

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

  console.log(paths);
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const { slug } = params;

  console.log(slug);

  /* HOW AM I SUPPOSED TO USE THE SLUG TO GET THE POST*/

  // const res = await fetch(`http://localhost:3000/blog/${slug}`);
  // const data = res.json();
  // const article = data[0];

  const article = articles[0];

  console.log(article);

  return {
    props: {
      article,
    },
  };
}
