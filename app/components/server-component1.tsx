import fs from "fs";
import ClientComponent1 from "./client-component1";
const ServerComponent1 = () => {
  fs.readFileSync("app/components/server-component1.tsx", "utf-8");
  return (
    <div>
      <h1>Server Component 1</h1>
    </div>
  );
};

export default ServerComponent1;
