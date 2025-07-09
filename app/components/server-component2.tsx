import fs from "fs";
const ServerComponent2 = () => {
  fs.readFileSync("app/components/server-component2.tsx", "utf-8");
  return <div>Server Component 2</div>;
};

export default ServerComponent2;
