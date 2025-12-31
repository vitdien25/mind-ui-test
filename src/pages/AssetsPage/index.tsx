import styles from "./AssetsPage.module.scss";
import EntitiesTable from "../../components/tables/EntitiesTable";
import {
  assetsColumns,
  assetsData,
  type Asset,
} from "../../components/tables/mockTableData";
import { FaPlus } from "react-icons/fa";
import { MdOutlineSearch } from "react-icons/md";
import IconButton from "../../components/buttons/IconButton";
import { IoReloadOutline } from "react-icons/io5";
import Search from "antd/es/input/Search";

const AssetsPage = () => {
  return (
    <div className={styles.assetsPage}>
      <EntitiesTable<Asset>
        columns={assetsColumns}
        dataSource={assetsData}
        pagination={{
          showTotal: (total, range) => `${range[0]} - ${range[1]} of ${total}`,
          pageSize: 10,
          showSizeChanger: true,
        }}
        leftHeader={
          <>
            Assets
            <div className={styles.searchContainer}>
              <span className={styles.label}>Asset Profile</span>
              <Search
                variant="underlined"
                placeholder="Search"
                allowClear
                style={{ width: 200 }}
              />
            </div>
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

export default AssetsPage;
