const Author = async ({ userId }: { userId: number }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const user: any = await res.json();
  return (
    <div>
      Writter By
      <span>{user.name}</span>
    </div>
  );
};

export default Author;
