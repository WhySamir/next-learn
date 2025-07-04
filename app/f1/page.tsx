import Link from "next/link";

const F1 = () => {
  return (
    <div>
      <p> Welcome to F1</p>
      <Link href="/f1/f2">Redirect to F2</Link>
      <Link href="/f3">Redirect to F3</Link>
    </div>
  );
};

export default F1;
