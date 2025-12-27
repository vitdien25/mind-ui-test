import { Layout } from "antd";
import styles from "./layout.module.scss";
import Sidebar from "./Sidebar";
import { Content, Header } from "antd/es/layout/layout";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout>
      <Sidebar />
      <Layout>
        <Header className={styles.header}>Header</Header>
        <Content className={styles.content}>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
