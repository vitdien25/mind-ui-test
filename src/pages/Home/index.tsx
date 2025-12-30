import { Button, Col, QRCode, Row, Select, Space } from "antd";
import styles from "./HomePage.module.scss";
import UseCaseCard from "../../components/cards/UseCaseCard";
import {
  MdArrowBackIos,
  MdArrowForwardIos,
  MdOutlineArrowOutward,
} from "react-icons/md";
import StatusCard from "../../components/cards/StatusCard";
import { IoIosWarning } from "react-icons/io";
import DashboardTable from "../../components/tables/DashboardTable";
import { FaApple, FaGooglePlay, FaPen } from "react-icons/fa";
import Container from "../../components/Container/Container";
import QuickLinks from "../../components/cards/QuickLinks";
import Stats from "../../components/cards/Stats";
import AppButton from "../../components/buttons/AppButton";
import GetStartedAccordion from "../../components/cards/GetStartedAccordion";
import LineChart from "../../components/charts/LineChart";

const HomePage = () => {
  return (
    <Space className={styles.homePage} size={10} orientation="vertical">
      <Row gutter={[10, 10]} align={"stretch"}>
        <Col span={17}>
          <Row gutter={[10, 10]}>
            {/* Demo use cases */}
            <Col span={24}>
              <Container
                leftHeader={
                  <>
                    Demo use cases
                    <MdOutlineArrowOutward />
                  </>
                }
                rightHeader={
                  <>
                    <button className={styles.navButton}>
                      <MdArrowBackIos />
                    </button>
                    <button className={styles.navButton}>
                      <MdArrowForwardIos />
                    </button>
                  </>
                }
                headerHeight={40}
                containerHeight={130}
              >
                <Row gutter={[10, 10]}>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Col span={24 / 5}>
                      <UseCaseCard key={index} />
                    </Col>
                  ))}
                </Row>
              </Container>
            </Col>
            {/* Devices */}
            <Col span={12}>
              <Container
                leftHeader={
                  <>
                    Devices <MdOutlineArrowOutward />
                  </>
                }
                rightHeader={
                  <>
                    <Button>View Docs</Button>
                    <Button type="primary">Add device</Button>
                  </>
                }
                alighnHeader="start"
                containerHeight={115}
              >
                <StatusCard label="Inactive" data={28} color="red" />
                <StatusCard label="Active" data={0} color="blue" />
                <StatusCard label="Total" data={28} />
              </Container>
            </Col>
            {/* Alarms */}
            <Col span={12}>
              <Container
                leftHeader={
                  <>
                    Alarms <MdOutlineArrowOutward />
                  </>
                }
                alighnHeader="start"
                containerHeight={115}
              >
                <StatusCard
                  label="Critical"
                  data={0}
                  color="red"
                  icon={<IoIosWarning color="#d12630" />}
                />
                <StatusCard label="Assigned to me" data={0} color="blue" />
                <StatusCard label="Total" data={0} />
              </Container>
            </Col>
            {/* Dashboard */}
            <Col span={12}>
              <Container
                containerHeight={185}
                leftHeader={
                  <>
                    Dashboard
                    <MdOutlineArrowOutward />
                  </>
                }
                rightHeader={
                  <>
                    <Select
                      defaultValue="lastViewed"
                      options={[
                        { value: "lastViewed", label: "Last viewed" },
                        { value: "starred", label: "Starred" },
                      ]}
                    />
                    <Button type="primary">Add Dashboard</Button>
                  </>
                }
              >
                <DashboardTable />
              </Container>
            </Col>
            {/* Activity */}
            <Col span={12}>
              <Container
                containerHeight={185}
                leftHeader="Activity"
                rightHeader={
                  <Select
                    defaultValue="devices"
                    options={[
                      { value: "devices", label: "Devices" },
                      { value: "alarms", label: "Alarms" },
                    ]}
                    style={{ width: 90 }}
                  />
                }
                alighnHeader="start"
                headerHeight={40}
              >
                <LineChart />
              </Container>
            </Col>
          </Row>
        </Col>
        {/* Get started */}
        <Col span={7}>
          <Container
            leftHeader="Get started"
            alighnHeader="start"
            headerHeight={45}
            containerHeight={450}
          >
            <GetStartedAccordion />
          </Container>
        </Col>
      </Row>
      <Row gutter={[10, 10]}>
        <Col span={17}>
          <Row gutter={[10, 10]}>
            {/* Quick links */}
            <Col span={8}>
              <Container
                containerHeight={155}
                leftHeader="Quick links"
                rightHeader={
                  <button className={styles.navButton}>
                    <FaPen size={16} color="#989a9d" />
                  </button>
                }
                alighnHeader="end"
              >
                <QuickLinks
                  items={[
                    { label: "Alarms" },
                    { label: "Dashboard" },
                    { label: "Devices", link: "/devices" },
                  ]}
                />
              </Container>
            </Col>
            {/* Documentation */}
            <Col span={8}>
              <Container
                containerHeight={155}
                leftHeader={
                  <>
                    Documentation <MdOutlineArrowOutward />
                  </>
                }
                rightHeader={
                  <button className={styles.navButton}>
                    <FaPen size={16} color="#989a9d" />
                  </button>
                }
                alighnHeader="end"
              >
                <QuickLinks
                  items={[
                    { label: "Getting started" },
                    { label: "Rule engine" },
                    { label: "API" },
                    { label: "Device profiles" },
                  ]}
                />
              </Container>
            </Col>
            {/* Usage */}
            <Col span={8}>
              <Container
                containerHeight={155}
                leftHeader={
                  <>
                    Usage <MdOutlineArrowOutward />
                  </>
                }
                rightHeader={
                  <Select
                    defaultValue="entities"
                    options={[
                      { value: "entities", label: "Entities" },
                      { value: "entity2", label: "Entity 2" },
                    ]}
                    style={{ width: 90 }}
                  />
                }
              >
                <Stats
                  stats={[
                    { label: "Devices", value: 28 },
                    { label: "Assets", value: 4 },
                    { label: "Users", value: 6 },
                    { label: "Dashboards", value: 23 },
                    { label: "Customers", value: 6 },
                  ]}
                ></Stats>
              </Container>
            </Col>
          </Row>
        </Col>
        {/* Connect mobile app */}
        <Col span={7}>
          <Container
            containerHeight={155}
            leftHeader="Connect mobile app"
            alighnHeader="start"
            headerHeight={40}
          >
            <div className={styles.qrSection}>
              <QRCode
                errorLevel={"H"}
                value="https://www.youtube.com/watch?v=zhciw9OZTM8"
                size={100}
              />
              <div className={styles.appButtons}>
                <AppButton
                  icon={<FaApple size={32} color="#fff" />}
                  text={{ text: "Download on the", app: "App Store" }}
                />
                <AppButton
                  icon={<FaGooglePlay size={32} color="#fff" />}
                  text={{ text: "GET IT ON", app: "Google Play" }}
                />
              </div>
            </div>
          </Container>
        </Col>
      </Row>
    </Space>
  );
};

export default HomePage;
