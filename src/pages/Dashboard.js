import {
  MoneyCollectFilled,
  ShoppingCartOutlined,
  TrophyOutlined,
} from "@ant-design/icons";
import {
  AppstoreFilled,
  OrderedListOutlined,
  ShoppingOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Card, Space, Statistic, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getOrder, getRevenue } from "../utils/mockdata";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  
  const RecentOrder = () => {
    const [dataSource, setdataSource] = useState([]);
    const [loading, setloading] = useState(false);

    useEffect(() => {
      setloading(true);
      getOrder().then((res) => {
        setdataSource(res.products);
        setloading(false);
      });
    }, []);
    const datasource = {};
    return (
      <div className=" flex flex-col flex-wrap mx-1">
        <Typography.Text className=" text-purple-950 font-bold">
          Recent orders
        </Typography.Text>
        <Table
          className=" mt-5 mb-3"
          dataSource={dataSource}
          columns={[
            {
              title: "Title",
              dataIndex: "title",
            },
            {
              title: "Quantity",
              dataIndex: "quantity",
            },
            {
              title: "DiscountedPrice",
              dataIndex: "discountedPrice",
            },
          ]}
        ></Table>
      </div>
    );
  };

  const Dashboardcard = ({ title, value, icon }) => {
    return (
      <Card size=" large">
        <Space direction="horizontal">
          {icon}
          <Statistic title={title} value={value}></Statistic>
        </Space>
      </Card>
    );
  };

  const DashboardChart = () => {
    // const [revenueData, setrevenueData] = useState([
    //   {
    //     labels: [],
    //     datasets: [],
    //   },
    // ]);

    // useEffect(() => {
    //     getRevenue().then(res => {
    //     const labels = res.carts.map((cart)=>{
    //         return `User-${cart.userId}`
    //     });

    //     const data = res.carts.map((cart)=>{
    //         return cart.discountedTotal;
    //     });
    //     const dataSource = {
    //       labels,
    //       datasets: [
    //         {
    //           label: "Revenue",
    //           data: data,
    //           backgroundColor: "rgba(255,0, 0, 1)",
    //         },
    //       ],
    //     };

    //   });
    // }, []);

    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: "bottom",
        },
        title: {
          display: true,
          text: "Revenue",
        },
      },
    };
    const labels = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
    ];

    const data = {
      labels,
      datasets: [
        {
          label: "Dataset 1",
          data: labels.map(() => Math.random() * 1000),
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
        {
          label: "Dataset 2",
          data: labels.map(() => Math.random() * 1000),
          backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
      ],
    };
    //sm:w-[350px] sm:h-[290px]
    return (
      <Card >
        <Bar 
        options={options} data={data} />
      </Card>
    );
  };

  return (
    <div className=" mt-10 flex flex-wrap flex-col ml-40">
      <Typography.Title level={5}>Data</Typography.Title>
      <Space direction="vertical" size={50}>
        <Space direction="horizontal" className=" flex flex-wrap">
          <Dashboardcard
            icon={
              <OrderedListOutlined className=" text-green-800 bg-green-200 rounded-md p-1" />
            }
            title={"Orders"}
            value={1234}
          />
          <Dashboardcard
            icon={
              <ShoppingOutlined className=" text-purple-400 bg-purple-200 rounded-md p-1" />
            }
            title={"Inventory"}
            value={1340}
          />
          <Dashboardcard
            icon={
              <UserAddOutlined className=" text-orange-500 bg-orange-200 rounded-md p-1" />
            }
            title={"Customers"}
            value={1001}
          />
          <Dashboardcard
            icon={
              <MoneyCollectFilled className=" text-yellow-600 bg-yellow-200 rounded-md p-1" />
            }
            title={"Revenue"}
            value={1000}
          />
        </Space>

        <RecentOrder />

        <DashboardChart />
      </Space>
    </div>
  );
};
export default Dashboard;
