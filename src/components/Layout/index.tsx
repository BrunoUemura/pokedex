import SideBar from "../Sidebar";
import TopBar from "../Topbar";

export const Layout = () => {
  return (
    <div className="w-screen h-screen bg-gray-300">
      <TopBar />
      <SideBar />
    </div>
  );
};
