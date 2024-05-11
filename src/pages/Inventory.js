// import { useEffect, useState } from "react";
// import { Table, Space } from "antd";
// import { getInventoryy } from "../utils/mockdata";
// import { getOrder, getRevenue } from "../utils/mockdata";
// const Inventory = () => {

//     const [datasource,setdatasource] = useState([]);
//   const [loading, setloading] = useState(false);


//   useEffect(() => {
//     setloading(true);
//     getInventoryy().then((res) => {
//      setdatasource(res.products);
//       setloading(false);
//     });
//   }, []);


//   return (
//     <div>
//       <Space direction="vertical">
//         <h3>Inventory</h3>
//         <Table
//           columns={[
//             {
//               title: "Title",
//               dataIndex:"title",
//             },
//             {
//               title: "Price",
//               dataIndex: "price",
//             },
//             {
//               title: "Rating",
//               dataIndex: "rating",
//             },
//             {
//               title: "Stock",
//               dataIndex: "stock",
//             },
//             {
//               title: "Thumbnail",
//               dataIndex: "thumbnail",
//             },
//             {
//               title: "Brand",
//               dataIndex: "brand",
//             },
//             {
//               title: "Category",
//               dataIndex: "category"
//             },
//           ]}
//           datasource={datasource}
//         ></Table>
//       </Space>
//     </div>
//   );
// };
// export default Inventory;
import { useEffect, useState } from "react";
import { Table, Space } from "antd";
import { getInventoryy } from "../utils/mockdata";

const Inventory = () => {
  const [datasource, setDatasource] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getInventoryy().then((res) => {
      setDatasource(res.products);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <Space direction="vertical">
        <h3>Inventory</h3>
        <Table
          columns={[
            {
              title: "Title",
              dataIndex: "title",
            },
            {
              title: "Price",
              dataIndex: "price",
            },
            {
              title: "Rating",
              dataIndex: "rating",
            },
            {
              title: "Stock",
              dataIndex: "stock",
            },
            {
              title: "Thumbnail",
              dataIndex: "thumbnail",
            },
            {
              title: "Brand",
              dataIndex: "brand",
            },
            {
              title: "Category",
              dataIndex: "category",
            },
          ]}
          dataSource={datasource} 
          loading={loading}
          pagination={{ pageSize: 10 }}
        />
      </Space>
    </div>
  );
};

export default Inventory;

