import { BellFilled, MailOutlined } from "@ant-design/icons";
import { Badge, Image, Space, Typography } from "antd";

const Header = () => {
  return (
    <div className=" h-[50px] p-1 md:px-10 flex flex-wrap justify-between items-center rounded-md ">
      <Image
        width={40}
        src="https://static.vecteezy.com/system/resources/thumbnails/006/820/233/small/desktop-line-icon-logo-free-vector.jpg"
      ></Image>
    
      {/* <Typography.Title level={3}
      > DASHBOARD</Typography.Title> */}
      <div className="text-xl  md:text-4xl font-bold">
        DASHBOARD
      </div>

      
      <Space size={"large"}>
        <Badge count={20}>
          <MailOutlined className=" text-[24px]" />
        </Badge>
        <Badge count={10}>
          <BellFilled className=" text-[24px]" />
        </Badge>
      </Space>
    </div>
  );
};
export default Header;
