import Link from "next/link";

const F2 = () => {
  return (
    <div>
      <p>Welcome to F2</p>
      <Link href="/f4">Welcome to F4</Link>
      <br />
      <Link href="./f2/interceptedroot">Welcome to interceptedroot</Link>
    </div>
  );
};

export default F2;
