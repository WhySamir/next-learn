"use client";

import { useState } from "react";
import ServerComponent1 from "./server-component1";

const ClientComponent1 = ({ children }: { children: React.ReactNode }) => {
  const [name, setName] = useState("Superman");
  return (
    <div>
      client component1
      {/* <ServerComponent1 /> throws error any component inside client becomes
      clinet */}
      {children}
    </div>
  );
};

export default ClientComponent1;
