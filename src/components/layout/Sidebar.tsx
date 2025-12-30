import styles from "./layout.module.scss";

import Sider from "antd/es/layout/Sider";
import Menu, { type MenuProps } from "antd/es/menu";
import { useNavigate } from "react-router-dom";
import {
  findItemByKey,
  sidebarItems,
  type SidebarItem,
} from "../../config/sidebar.config";
import { FaMicrochip } from "react-icons/fa6";

type AntdMenuItem = Required<MenuProps>["items"][number];

const mapToMenuItems = (items: SidebarItem[]): AntdMenuItem[] => {
  return items.map((item) => ({
    key: item.key,
    icon: item.icon,
    label: item.label,
    children: item.children ? mapToMenuItems(item.children) : undefined,
  }));
};

const Sidebar = () => {
  const navigate = useNavigate();

  const handleMenuClick = (e: { key: string }) => {
    const item = findItemByKey(sidebarItems, e.key);
    if (item?.key) navigate(item.key);
  };

  return (
    <Sider className={styles.sidebar} width={250} style={{ height: "100vh" }}>
      <div className={styles.logo}>
        <FaMicrochip />
        ThighsBoard
      </div>
      <Menu
        items={mapToMenuItems(sidebarItems)}
        defaultSelectedKeys={["/"]}
        defaultOpenKeys={["entities"]}
        mode="inline"
        className={styles.menu}
        onClick={handleMenuClick}
      />
    </Sider>
  );
};

export default Sidebar;
