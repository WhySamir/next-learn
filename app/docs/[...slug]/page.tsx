export default async function Docs({
  params,
}: {
  params: Promise<{ slug: string[] }>; //here i need to asssign same name as in folder
}) {
  const { slug } = await params;
  if (slug?.length === 2) {
    return (
      <h1>
        Veiwing docs for feature {slug[0]} and concept {slug[1]}
      </h1>
    );
  } else if (slug?.length === 1) {
    return <h1>Veiwing docs for feature {slug[0]}</h1>;
  }
  return <div>Main home page </div>;
}
