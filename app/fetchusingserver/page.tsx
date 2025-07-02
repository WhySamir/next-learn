export default async function page() {
  const res = await fetch("https://v2.jokeapi.dev/joke/Programming?amount=10");
  const result = await res.json();

  const jokes = result.jokes.map((joke: any, id: Number) => {
    if (joke.type === "single") {
      return joke.joke;
    } else return `${joke.setup} — ${joke.delivery}`;
  });

  return (
    <>
      <div className="mb-6">
        {jokes.map((joke: string, index: number) => (
          <div key={index}>
            <h1 className="mb-3">{joke}</h1>
          </div>
        ))}
      </div>
    </>
  );
}
