import { Col, Row, Space } from "antd";
import styles from "./HomePage.module.scss";
import UseCaseCard from "../../components/cards/UseCaseCard";
import {
  MdArrowBackIos,
  MdArrowForwardIos,
  MdOutlineArrowOutward,
} from "react-icons/md";
import StatusCard from "../../components/cards/StatusCard";
const HomePage = () => {
  return (
    <Space className={styles.homePage} size={14} orientation="vertical">
      <Row gutter={[14, 14]} align={"stretch"}>
        <Col span={18}>
          <Row gutter={[14, 14]}>
            {/* Demo use cases */}
            <Col span={24}>
              <div className={styles.demoContainer}>
                <div className={styles.containerHeader}>
                  <span>
                    Demo use cases
                    <MdOutlineArrowOutward />
                  </span>
                  <span>
                    <button>
                      <MdArrowBackIos />
                    </button>
                    <button>
                      <MdArrowForwardIos />
                    </button>
                  </span>
                </div>
                <div className={styles.demoContent}>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <UseCaseCard key={index} />
                  ))}
                </div>
              </div>
            </Col>
            <Col span={12}>
              <div className={styles.container}>
                <div className={styles.containerHeader}>
                  <span>
                    Demo use cases
                    <MdOutlineArrowOutward />
                  </span>
                </div>
                <div className={styles.statusCards}>
                  <StatusCard label="Inactive" data={28} color="red" />
                  <StatusCard label="Active" data={0} color="blue" />
                  <StatusCard label="Total" data={28} />
                </div>
              </div>
            </Col>
            <Col span={12}>
              <div className={styles.container}>Alarms</div>
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
