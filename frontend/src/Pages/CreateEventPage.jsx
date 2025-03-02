import CreateEvent from "../Components/Layout/Dashboard/DashboardContent/CreateEvent";
import DashboardHeader from "../Components/Layout/Dashboard/DashboardHeader";
import DashboardSidebar from "../Components/Layout/Dashboard/DashboardSidebar";

const CreateEventPage = () => {
  return (
    <>
      <DashboardHeader />

      <div className="flex w-full bg-gray-100 min-h-screen">
        <div className="w-[80px] 800px:w-[335px] bg-[#2C5F34] shadow-lg">
          <DashboardSidebar active={6} />
        </div>

        <div className="w-full mt-10 px-5 flex justify-center">
          <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
            <CreateEvent />
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateEventPage;
