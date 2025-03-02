import { useState } from "react";
import DashboardHeader from "../Components/Layout/Dashboard/DashboardHeader";
import DashboardSidebar from "../Components/Layout/Dashboard/DashboardSidebar";
import DashboardContent from "../Components/Layout/Dashboard/DashboardContent/DashboardContent";

const DashboardPage = () => {
  const [active, setActive] = useState(1);

  return (
    <>
      <DashboardHeader />

      <div className="flex w-full bg-gray-100 min-h-screen">
        <div className="w-[70px] 800px:w-[335px] bg-[#2C5F34] shadow-lg">
          <DashboardSidebar active={active} setActive={setActive} />
        </div>

        <div className="w-full p-6">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <DashboardContent active={active} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
