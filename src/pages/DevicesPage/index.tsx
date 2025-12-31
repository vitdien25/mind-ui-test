import { MdFilterList, MdOutlineSearch } from "react-icons/md";
import { IoReloadOutline } from "react-icons/io5";
import IconButton from "../../components/buttons/IconButton";
import EntitiesTable from "../../components/tables/EntitiesTable";
import {
  devicesColumns,
  devicesData,
  type Device,
} from "../../components/tables/mockTableData";
import { FaPlus } from "react-icons/fa";
import { Button } from "antd";
import styles from "./DevicesPage.module.scss";

const DevicesPage = () => {
  return (
    <div className={styles.devicesPage}>
      <EntitiesTable<Device>
        columns={devicesColumns}
        dataSource={devicesData}
        pagination={{
          showTotal: (total, range) => `${range[0]} - ${range[1]} of ${total}`,
          pageSize: 10,
          showSizeChanger: true,
        }}
        leftHeader={
          <>
            Devices
            <Button
              icon={<MdFilterList size={18} style={{ marginTop: "2px" }} />}
              className={styles.filterButton}
            >
              Device Filter
            </Button>
          </>
        }
        rightHeader={
          <>
            <IconButton icon={<FaPlus size={24} />} />
            <IconButton icon={<IoReloadOutline size={24} />} />
            <IconButton icon={<MdOutlineSearch size={28} />} />
          </>
        }
      />
    </div>
  );
};

export default DevicesPage;
