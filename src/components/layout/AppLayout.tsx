import { Avatar, Button, Layout } from "antd";
import styles from "./layout.module.scss";
import Sidebar from "./Sidebar";
import { Content, Header } from "antd/es/layout/layout";
import { useLocation } from "react-router-dom";
import { findItemByKey, sidebarItems } from "../../config/sidebar.config";
import { FaExpand } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { MdNotifications, MdOutlineMoreVert } from "react-icons/md";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const currentItem = findItemByKey(sidebarItems, location.pathname);
  return (
    <Layout className={styles.appLayout}>
      <Sidebar />
      <Layout className={styles.layout}>
        <Header className={styles.header}>
          <div className={styles.headerTitle}>
            {currentItem ? (
              <>
                {currentItem.icon} {currentItem.label}
              </>
            ) : (
              "Header"
            )}
          </div>
          <div className={styles.headerActions}>
            <Button>
              <FaExpand size={24} color="#fff" />
            </Button>
            <Button>
              <MdNotifications size={28} color="#fff" />
            </Button>
            <div className={styles.user}>
              <Avatar icon={<RxAvatar size={36} />} size={36} />
              <div className={styles.userInfo}>
                <span>Vịt Điên</span>
                <span className={styles.userRole}>Cựu Elden Lord</span>
              </div>
            </div>
            <Button>
              <MdOutlineMoreVert size={32} color="#fff" />
            </Button>
          </div>
        </Header>
        <Content className={styles.content}>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
