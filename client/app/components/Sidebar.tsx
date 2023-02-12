"use client";

import { usePathname } from "next/navigation";
import Navigation from "./Navigation";

const Sidebar = () => {
  const pathname = usePathname();
  const isLoginPage = pathname === "/";

  return (
    <>
      {!isLoginPage ? (
        <aside className="h-fit p-4 rounded-md bg-white shadow-md shadow-gray-300">
          <h2 className="mb-3 text-lg text-gray-400">Navigation</h2>
          <Navigation currentPath={pathname} />
        </aside>
      ) : null}
    </>
  );
};

export default Sidebar;
