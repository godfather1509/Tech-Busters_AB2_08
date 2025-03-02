import { useEffect } from "react";
import SellerProfileSideBar from "../Components/Layout/Dashboard/SellerProfilePage/SellerProfileSideBar";
import SellerProfileData from "../Components/Layout/Dashboard/SellerProfilePage/SellerProfileData";
import styles from "../Styles/Style";

const SellerProfilePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`${styles.section} bg-[#f5f5f5] min-h-screen py-10`}>
      <div className="flex justify-between flex-wrap gap-6">
        {/* Sidebar */}
        <div
          className="800px:sticky top-10 left-0 overflow-y-auto w-full 800px:w-[25%] h-[90vh] z-10 rounded-lg bg-white shadow-md px-4 py-5"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#2C5F34 #f5f5f5",
          }}>
          <SellerProfileSideBar isOwner={true} />
        </div>

        {/* Profile Data Section */}
        <div className="w-full 800px:w-[72%] rounded-lg bg-white shadow-md p-6">
          <SellerProfileData isOwner={true} />
        </div>
      </div>
    </div>
  );
};

export default SellerProfilePage;
