import { ReactNode } from "react";

interface props {
  children: ReactNode;
}

function Layout({ children }: props) {
  return (
    <div className="w-full h-screen flex flex-col overflow-auto">
      <div className="h-full w-full bg-white bg-center bg-cover bg-no-repeat flex flex-col">
        {children}
      </div>
    </div>
  );
}

export default Layout;
