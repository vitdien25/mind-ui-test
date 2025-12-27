import styles from "./layout.module.scss";
import {
  MdHome,
  MdOutlineWarning,
  MdDashboard,
  MdOutlineDevicesOther,
  MdWebAsset,
  MdOutlineViewSidebar,
  MdOutlineLan,
  MdOutlineSettingsInputAntenna,
  MdOutlineConstruction,
  MdFolder,
  MdSmartphone,
} from "react-icons/md";
import { FaShapes, FaMessage, FaMicrochip } from "react-icons/fa6";
import { RiProfileLine, RiCustomerService2Fill } from "react-icons/ri";
import { IoMdCodeWorking } from "react-icons/io";
import Sider from "antd/es/layout/Sider";
import Menu from "antd/es/menu";
const sidebarItems = [
  {
    key: "/",
    icon: <MdHome />,
    label: "Home",
  },
  {
    key: "/alarms",
    icon: <MdOutlineWarning />,
    label: "Alarms",
  },
  {
    key: "/dashboards",
    icon: <MdDashboard />,
    label: "Dashboards",
  },
  {
    key: "entities",
    icon: <FaShapes />,
    label: "Entities",
    children: [
      { key: "/devices", label: "Devices", icon: <MdOutlineDevicesOther /> },
      { key: "/assets", label: "Assets", icon: <MdWebAsset /> },
      {
        key: "/entity-views",
        label: "Entity views",
        icon: <MdOutlineViewSidebar />,
      },
      { key: "/gateways", label: "Gateways", icon: <MdOutlineLan /> },
    ],
  },
  {
    key: "/profiles",
    icon: <RiProfileLine />,
    label: "Profiles",
  },
  {
    key: "/customers",
    icon: <RiCustomerService2Fill />,
    label: "Customers",
  },
  {
    key: "/rules-chains",
    icon: <IoMdCodeWorking />,
    label: "Rule chains",
  },
  {
    key: "/edge-management",
    icon: <MdOutlineSettingsInputAntenna />,
    label: "Edge management",
  },
  {
    key: "/advanced-features",
    icon: <MdOutlineConstruction />,
    label: "Advanced features",
  },
  {
    key: "/resources",
    icon: <MdFolder />,
    label: "Resources",
  },
  {
    key: "/notification-center",
    icon: <FaMessage />,
    label: "Notification center",
  },
  {
    key: "/mobile-center",
    icon: <MdSmartphone />,
    label: "Mobile center",
  },
];
const Sidebar = () => {
  return (
    <Sider className={styles.sidebar} width={250}>
      <div className={styles.logo}>
        <FaMicrochip />
        ThighsBoard
      </div>
      <Menu items={sidebarItems} mode="inline" className={styles.menu} />
    </Sider>
  );
};

export default Sidebar;
