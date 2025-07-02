import Link from "next/link";

const Users = () => {
  const arr = ["samir", "amy", "samy"];
  return (
    <>
      <h1>This is Dashboard for users</h1>
      <ul className="mt-4">
        {arr.map((user: string, idx) => {
          return (
            <li key={idx}>
              <Link href={`/users/${encodeURIComponent(user)}`}>{user}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Users;
