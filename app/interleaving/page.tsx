import ClientComponent1 from "../components/client-component1";
import ServerComponent1 from "../components/server-component1";

export default function Interleaving() {
  return (
    <>
      <h1>Interleaving page</h1>
      <ClientComponent1>
        <ServerComponent1 />
      </ClientComponent1>
    </>
  );
}
