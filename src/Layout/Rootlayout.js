import { Space } from "antd";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import SideNavigation from "./Sidenavigation";

const RootLayout = () => {
  return (
    <div className=" min-h-screen min-w-screen flex flex-col">
      <Header />
      {/* <Space className=" flex flex-1 items-start">
      <SideNavigation />
      <Outlet/>
        </Space> */}

      <div className=" flex flex-1  flex-wrap  gap-x-9">
        <SideNavigation />
        <Outlet />
      </div>

      <Footer />

    </div>

  //   <div className=" min-h-screen min-w-screen flex flex-col">
  //   <Header />
  //   <Space className=" flex flex-1 justify-start items-start">
  //     <SideNavigation />
  //     <Outlet />
  //   </Space>
  //   <Footer />
  // </div>

  );
};

export default RootLayout;
