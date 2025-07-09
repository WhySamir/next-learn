import Author from "./author";

type User = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default async function PostFetching() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const response = await fetch(url);
  const posts: User[] = await response.json();
  return (
    <>
      {posts.map((post: User, idx: number) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <Author userId={post.userId} />
        </div>
      ))}
    </>
  );
}
