import { Checkbox, Space, Tag, Tooltip } from "antd";
import {
  MdAssignmentInd,
  MdDelete,
  MdOutlineSecurity,
  MdShare,
} from "react-icons/md";
import { RiFolderTransferFill } from "react-icons/ri";
import { BiSolidShare } from "react-icons/bi";
import type { ColumnsType } from "antd/es/table/interface";

export interface Device {
  key: string;
  createdTime: string;
  name: string;
  deviceProfile: string;
  label?: string;
  state: "Active" | "Inactive";
  customer: string;
  isPublic: boolean;
  isGateway: boolean;
}

export const devicesColumns: ColumnsType<Device> = [
  {
    title: "Created time",
    dataIndex: "createdTime",
    key: "createdTime",
    width: 200,
    sorter: (a, b) =>
      new Date(a.createdTime).getTime() - new Date(b.createdTime).getTime(),
    sortDirections: ["descend"],
  },
  { title: "Name", dataIndex: "name", key: "name", width: 100 },
  {
    title: "Device profile",
    dataIndex: "deviceProfile",
    key: "deviceProfile",
    width: 150,
  },
  { title: "Label", dataIndex: "label", key: "label", width: 100 },
  {
    title: "State",
    dataIndex: "state",
    key: "state",
    width: 90,
    render: (state: string) => (
      <Tag color={state === "Inactive" ? "error" : "success"}>{state}</Tag>
    ),
  },
  { title: "Customer", dataIndex: "customer", key: "customer", width: 100 },
  {
    title: "Public",
    dataIndex: "public",
    key: "public",
    width: 80,
    render: (c: boolean) => <Checkbox checked={c} />,
  },
  {
    title: "Is gateway",
    dataIndex: "isGateway",
    key: "isGateway",
    width: 100,
    render: (c: boolean) => <Checkbox checked={c} />,
  },
  {
    title: "",
    dataIndex: "actions",
    key: "actions",
    render: () => (
      <Space size="middle">
        <Tooltip title="Share">
          <MdShare size={20} />
        </Tooltip>
        <Tooltip title="Assign">
          <MdAssignmentInd size={20} />
        </Tooltip>
        <Tooltip title="Transfer">
          <RiFolderTransferFill size={20} />
        </Tooltip>
        <Tooltip title="Move">
          <BiSolidShare size={20} />
        </Tooltip>
        <Tooltip title="Security">
          <MdOutlineSecurity size={20} />
        </Tooltip>
        <Tooltip title="Delete">
          <MdDelete size={20} />
        </Tooltip>
      </Space>
    ),
  },
];

export const devicesData: Device[] = Array.from({ length: 20 }, (_, i) => ({
  key: i.toString(),
  createdTime: new Date(2023, 0, i + 1).toISOString().split(`.`)[0],
  name: `Device ${i + 1}`,
  deviceProfile: `Profile ${((i % 5) + 1).toString()}`,
  label: i % 3 === 0 ? `Label ${((i % 4) + 1).toString()}` : undefined,
  state: i % 2 === 0 ? "Active" : "Inactive",
  customer: "Public",
  isPublic: i % 2 === 0,
  isGateway: i % 3 === 0,
}));
