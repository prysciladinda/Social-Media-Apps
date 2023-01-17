import { ReactNode } from "react";

interface props {
  children: ReactNode;
}

function Layout({ children }: props) {
  return (
    <div className="w-full h-screen overflow-auto">
      <div className="h-full w-full bg-[#ACF9F2] overflow-auto">{children}</div>
    </div>
  );
}

export default Layout;
