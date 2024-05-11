import Inventory from "../pages/Inventory";
import Customers from "../pages/Customers";
import Orders from "../pages/Orders";
import { Route, RouterProvider, Routes } from "react-router-dom";

import Dashboard from "../pages/Dashboard";

const PageNavigation = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </div>
  );
};
export default PageNavigation;
