import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center justify-center bg-bg_primary relative">
      {children}
    </div>
  );
};

export default layout;
