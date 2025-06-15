import { allArticles } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';

export async function getStaticPaths() {
  const paths = allArticles.map((article) => ({
    params: { slug: article.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const article = allArticles.find((a) => a.slug === params.slug);
  return { props: { article } };
}

export default function ArticlePage({ article }) {
  const MDXContent = useMDXComponent(article.body.code);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">{article.title}</h1>
      <p className="text-sm text-gray-500 mb-6">{article.date}</p>
      <div className="prose dark:prose-invert">
        <MDXContent />
      </div>
    </div>
  );
}
