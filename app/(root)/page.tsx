import { Search } from "../components/search";

export default function Home() {
  console.log("Hello from server not client");
  // throw new Error("Not implemented");
  return (
    <>
      <Search />
      <h1>hello next world from server</h1>
    </>
  );
}
