import Link from "next/link";

const InterceptedRoot = () => {
  return (
    <div>
      <p>Welcome to InterceptedRoot</p>
      <Link href="/f5">F5</Link>
    </div>
  );
};

export default InterceptedRoot;
