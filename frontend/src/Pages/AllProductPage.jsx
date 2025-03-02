import AllProducts from "../Components/Layout/Dashboard/DashboardContent/AllProducts";
import DashboardHeader from "../Components/Layout/Dashboard/DashboardHeader";
import DashboardSidebar from "../Components/Layout/Dashboard/DashboardSidebar";

const AllProductPage = () => {
  return (
    <>
      <DashboardHeader />

      <div className="flex w-full bg-gray-100 min-h-screen">
        <div className="w-[80px] 800px:w-[335px] bg-[#2C5F34] shadow-lg">
          <DashboardSidebar active={3} />
        </div>

        <div className="w-full mt-10 px-5">
          <div className="bg-white shadow-md rounded-lg p-6">
            <AllProducts />
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProductPage;
