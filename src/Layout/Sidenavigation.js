import {
  AppstoreFilled,
  OrderedListOutlined,
  ShoppingOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

const SideNavigation = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Menu
        onClick={(item) => {
          navigate(item.key);
        }}
        items={[
          {
            label: "Dashboard",
            icon: <AppstoreFilled />,
            key: "/",
          },
          {
            label: "Inventory",
            icon: <ShoppingOutlined />,
            key: "/inventory",
          },
          {
            label: "Orders",
            icon: <OrderedListOutlined />,
            key: "/orders",
          },
          {
            label: "Customers",
            icon: <UserAddOutlined />,
            key: "/customers",
          },
        ]}
      ></Menu>
    </div>
  );
};
export default SideNavigation;
