import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";

export const AppLayout = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-10">
        <Navbar />
      </div>
      <div className="flex mt-16 z-0">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};
