import type { CollapseProps } from "antd";
import { Avatar, Collapse } from "antd";
import styles from "./Card.module.scss";

import { Typography, Space } from "antd";
import CopyBox from "./CopyBox";

const { Text } = Typography;

const StepContent = () => {
  return (
    <Space orientation="vertical" size={10} style={{ width: "100%" }}>
      <Text>
        To trigger the alarm, send a new telemetry value of 26°C or higher.
      </Text>

      <Text>
        Replace <Text type="secondary">$ACCESS_TOKEN</Text> with your device's
        token:
      </Text>

      <CopyBox
        value={`curl -v -X POST -d '{"temperature": 26}' https://demo.thingsboard.io/api/v1/$ACCESS_TOKEN/telemetry --header "Content-Type:application/json"`}
      />
    </Space>
  );
};

const AccordionLabel = ({ step, label }: { step: number; label: string }) => {
  return (
    <div className={styles.accordionLabel}>
      <Avatar icon={step} className={styles.stepIcon} size={24} />
      {label}
    </div>
  );
};

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: <AccordionLabel step={1} label="Create device" />,
    children: <StepContent />,
    showArrow: false,
  },
  {
    key: "2",
    label: <AccordionLabel step={2} label="Connect device" />,
    children: <StepContent />,
    showArrow: false,
  },
  {
    key: "3",
    label: <AccordionLabel step={3} label="Create dashboard" />,
    children: <StepContent />,
    showArrow: false,
  },
  {
    key: "4",
    label: <AccordionLabel step={4} label="Configure alarm rules" />,
    children: <StepContent />,
    showArrow: false,
  },
  {
    key: "5",
    label: <AccordionLabel step={5} label="Create alarm" />,
    children: <StepContent />,
    showArrow: false,
  },
];

const GetStartedAccordion = () => {
  return (
    <Collapse
      defaultActiveKey={["5"]}
      items={items}
      accordion
      bordered={false}
      className={styles.accordion}
    />
  );
};

export default GetStartedAccordion;
