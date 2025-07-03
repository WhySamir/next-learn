import Link from "next/link";

const page = () => {
  return (
    <div>
      <h1>Welcome Home</h1>
      <Link href="articles/1?lang=en">Article1</Link>
      <Link href="articles/2?lang=np">Article2</Link>
      <Link href="articles/3?lang=nw">Article3</Link>
    </div>
  );
};

export default page;
