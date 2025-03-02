import AllOrders from "../Components/Layout/Dashboard/DashboardContent/AllOrders";
import DashboardSidebar from "../Components/Layout/Dashboard/DashboardSidebar";
import DashboardHeader from "../Components/Layout/Dashboard/DashboardHeader";

const AllOrderPage = () => {
  return (
    <>
      <DashboardHeader />

      <div className="flex w-full bg-gray-100 min-h-screen">
        <div className="w-[80px] 800px:w-[335px] bg-[#2C5F34] shadow-md">
          <DashboardSidebar active={2} />
        </div>

        <div className="w-full mt-10 px-5">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <AllOrders />
          </div>
        </div>
      </div>
    </>
  );
};

export default AllOrderPage;
