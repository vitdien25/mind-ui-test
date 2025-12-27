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
import { FaShapes, FaMessage } from "react-icons/fa6";
import { RiProfileLine, RiCustomerService2Fill } from "react-icons/ri";
import { IoMdCodeWorking } from "react-icons/io";

export interface SidebarItem {
  key: string;
  icon: React.ReactNode;
  label: string;
  children?: SidebarItem[];
}

export const sidebarItems: SidebarItem[] = [
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
      {
        key: "/devices",
        label: "Devices",
        icon: <MdOutlineDevicesOther />,
      },
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
    key: "/rule-chains",
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

export const findItemByKey = (
  items: SidebarItem[],
  key: string
): SidebarItem | undefined => {
  for (const item of items) {
    if (item.key === key) return item;
    if (item.children) {
      const found = findItemByKey(item.children, key);
      if (found) return found;
    }
  }
};
