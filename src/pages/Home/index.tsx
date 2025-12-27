import { Button, Col, Row, Space } from "antd";
import styles from "./HomePage.module.scss";
import UseCaseCard from "../../components/cards/UseCaseCard";
import {
  MdArrowBackIos,
  MdArrowForwardIos,
  MdOutlineArrowOutward,
} from "react-icons/md";
const HomePage = () => {
  return (
    <Space className={styles.homePage} size={14} orientation="vertical">
      <Row gutter={[14, 14]} align={"stretch"}>
        <Col span={18}>
          <Row gutter={[14, 14]}>
            {/* Demo use cases */}
            <Col span={24}>
              <div className={styles.demoContainer}>
                <div className={styles.demoHeader}>
                  <span>
                    Demo use cases
                    <MdOutlineArrowOutward />
                  </span>
                  <span>
                    <Button>
                      <MdArrowBackIos />
                    </Button>
                    <Button>
                      <MdArrowForwardIos />
                    </Button>
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
              <div className={styles.container}>Devices</div>
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
