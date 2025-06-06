import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { Outlet } from "react-router-dom";

const LayoutUser = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="h-full flex flex-row">
        <Sidebar />
        <div className="w-full p-10! bg-[#FEF4FF] h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default LayoutUser;
