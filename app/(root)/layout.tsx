import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="text-2xl">Root Layout</div>
      {children}
    </>
  );
};

export default layout;
