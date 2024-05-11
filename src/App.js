import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import RootLayout from "./Layout/Rootlayout";
import Header from "./Layout/Header";
import SideNavigation from "./Layout/Sidenavigation";
import Footer from "./Layout/Footer";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import Customers from "./pages/Customers";
import Orders from "./pages/Orders";
import PageNavigation from "./Layout/Pagenavigation";
import { Space } from "antd";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />} >
        <Route path = "/" element = {<Dashboard />} />
        <Route path = "/inventory" element = {<Inventory />} />
        <Route path = "/customers" element = {<Customers/>} />
        <Route path = "/orders" element = {<Orders/>} />
          </Route>
      </Routes>
    </BrowserRouter>
    // <div className=" min-h-screen min-w-screen flex flex-col">
    //   <Header />
    //   <Space className=" flex flex-1 justify-start items-start">
    //     <SideNavigation></SideNavigation>
    //     <PageNavigation></PageNavigation>
    //   </Space>
    //   <Footer />
    // </div>
  );
}

export default App;
