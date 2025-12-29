import { Button, Col, Row } from "antd";
import styles from "./Card.module.scss";
import { useNavigate } from "react-router-dom";

interface Item {
  label: string;
  link?: string;
}
interface QuickLinksProps {
  items?: Item[];
}
const QuickLinks = ({ items }: QuickLinksProps) => {
  const navigate = useNavigate();
  const handleOnClick = (link?: string) => {
    if (link) {
      navigate(link);
    }
  };
  return (
    <div className={styles.quickLinks}>
      <Row gutter={[8, 8]}>
        {items?.map((item, index) => (
          <Col span={12} key={index}>
            <Button
              key={index}
              className={styles.linkButton}
              onClick={() => handleOnClick(item.link)}
            >
              {item.label}
            </Button>
          </Col>
        ))}
        <Col span={12}>
          <Button className={styles.addButton} type="dashed">
            +
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default QuickLinks;
