import Link from "next/link";

const NewArticle = async ({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: string }>;
}) => {
  const { articleId } = await params;
  const { lang = "en" } = await searchParams; // ✅ await here!
  return (
    <div>
      <h1>News Articles {articleId}</h1>
      <p>Reading in {lang}</p>
      <div>
        <Link href={`/articles/${articleId}?lang=en`}>English</Link>
        <Link href={`/articles/${articleId}?lang=np`}>Nepali</Link>
        <Link href={`/articles/${articleId}?lang=nw`}>Newari</Link>
      </div>
    </div>
  );
};

export default NewArticle;
