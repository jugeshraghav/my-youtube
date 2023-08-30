import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";

export const AppLayout = () => {
  return (
    <>
      <div className="fixed top-0 left-0 z-10 w-full bg-red-200">
        <Navbar />
      </div>
      <div className="flex gap-4 mt-16 z-0 w-screen bg-blue-300">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};
