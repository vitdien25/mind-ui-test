import EntitiesTable from "../../components/tables/EntitiesTable";
import {
  devicesColumns,
  devicesData,
  type Device,
} from "../../components/tables/mockTableData";
import styles from "./DevicesPage.module.scss";

const DevicesPage = () => {
  return (
    <EntitiesTable<Device>
      columns={devicesColumns}
      dataSource={devicesData}
      pagination={{
        showTotal: (total, range) => `${range[0]} - ${range[1]} of ${total}`,
        pageSize: 10,
        showSizeChanger: true,
      }}
      title={<span className={styles.title}>Devices</span>}
    />
  );
};

export default DevicesPage;
