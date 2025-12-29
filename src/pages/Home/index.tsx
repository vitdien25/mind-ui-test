import { Button, Col, Row, Space } from "antd";
import styles from "./HomePage.module.scss";
import UseCaseCard from "../../components/cards/UseCaseCard";
import {
  MdArrowBackIos,
  MdArrowForwardIos,
  MdOutlineArrowOutward,
} from "react-icons/md";
import StatusCard from "../../components/cards/StatusCard";
import { IoIosWarning } from "react-icons/io";
const HomePage = () => {
  return (
    <Space className={styles.homePage} size={14} orientation="vertical">
      <Row gutter={[14, 14]} align={"stretch"}>
        <Col span={18}>
          <Row gutter={[14, 14]}>
            {/* Demo use cases */}
            <Col span={24}>
              <div className={styles.container}>
                <div className={styles.containerHeader}>
                  <span>
                    Demo use cases
                    <MdOutlineArrowOutward />
                  </span>
                  <span>
                    <button className={styles.navButton}>
                      <MdArrowBackIos />
                    </button>
                    <button className={styles.navButton}>
                      <MdArrowForwardIos />
                    </button>
                  </span>
                </div>
                <div className={styles.containerContent}>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <UseCaseCard key={index} />
                  ))}
                </div>
              </div>
            </Col>
            {/* Devices */}
            <Col span={12}>
              <div className={styles.container}>
                <div
                  className={styles.containerHeader}
                  style={{ height: 50, padding: 4, alignItems: "start" }}
                >
                  <span>
                    Devices
                    <MdOutlineArrowOutward />
                  </span>
                  <span>
                    <Button className={styles.primaryButton}>View Docs</Button>
                    <Button type="primary">Add device</Button>
                  </span>
                </div>
                <div className={styles.containerContent}>
                  <StatusCard label="Inactive" data={28} color="red" />
                  <StatusCard label="Active" data={0} color="blue" />
                  <StatusCard label="Total" data={28} />
                </div>
              </div>
            </Col>
            {/* Alarms */}
            <Col span={12}>
              <div className={styles.container}>
                <div
                  className={styles.containerHeader}
                  style={{ height: 50, padding: 4, alignItems: "start" }}
                >
                  <span>
                    Alarms
                    <MdOutlineArrowOutward />
                  </span>
                </div>
                <div className={styles.containerContent}>
                  <StatusCard
                    label="Critical"
                    data={0}
                    color="red"
                    icon={<IoIosWarning color="#d12630" />}
                  />
                  <StatusCard label="Assigned to me" data={0} color="blue" />
                  <StatusCard label="Total" data={0} />
                </div>
              </div>
            </Col>
            <Col span={12}>
              <div className={styles.container}>Dashboard</div>
            </Col>
            <Col span={12}>
              <div className={styles.container}>Activity</div>
            </Col>
          </Row>
        </Col>
        <Col span={6}>
          <div className={styles.container}>Get started</div>
        </Col>
      </Row>
      <Row gutter={[14, 14]}>
        <Col span={6}>
          <div className={styles.container}>System activity</div>
        </Col>
        <Col span={6}>
          <div className={styles.container}>System activity</div>
        </Col>
        <Col span={6}>
          <div className={styles.container}>System activity</div>
        </Col>
        <Col span={6}>
          <div className={styles.container}>System activity</div>
        </Col>
      </Row>
    </Space>
  );
};

export default HomePage;
