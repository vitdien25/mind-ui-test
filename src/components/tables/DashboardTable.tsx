import { Table } from "antd";
import styles from "./Table.module.scss";
import { MdStarOutline } from "react-icons/md";

const columns = [
  { title: "", dataIndex: "mark", key: "mark", width: 50 },
  { title: "Name", dataIndex: "name", key: "name" },
  { title: "Last view", dataIndex: "lastView", key: "lastView", width: 100 },
];

const dataSource = [
  { mark: <MdStarOutline size={20} />, name: "rpc", lastView: "year ago" },
  { mark: <MdStarOutline size={20} />, name: "test4", lastView: "year ago" },
  { mark: <MdStarOutline size={20} />, name: "test 2", lastView: "year ago" },
];

const DashboardTable = () => {
  return (
    <div className={styles.dashboardTable}>
      <Table
        columns={columns}
        dataSource={dataSource}
        pagination={false}
        scroll={{ y: 100 }}
      />
    </div>
  );
};

export default DashboardTable;
