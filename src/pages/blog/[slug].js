import { articles } from "../../../articles";

export default function ArticleDetail({ article }) {
  console.log(articles);
  return (
    <div>
      <h1> Single Article Page</h1>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch(articles);
  const articles = await res.json();

  const paths = articles.map((article) => ({
    params: {
      slug: article.slug,
    },
  }));

  console.log(paths);
  return {
    paths,
    fallback: true,
  };
}
export async function getStaticProps(context) {
  const slug = context.params.slug;

  console.log(slug);
  const res = await fetch(`/articles/${slug}`);
  const data = await res.json;

  const article = data[0];
  return {
    props: { article },
  };
}
