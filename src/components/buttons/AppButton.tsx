import { Button } from "antd";
import styles from "./Button.module.scss";

interface AppButtonProps {
  icon?: React.ReactNode;
  text: {
    text: string;
    app: string;
  };
}

const AppButton = ({ icon, text }: AppButtonProps) => {
  return (
    <Button type="primary" variant="solid" className={styles.appButton}>
      {icon}
      <div className={styles.appButtonText}>
        <span>{text.text}</span>
        <span>{text.app}</span>
      </div>
    </Button>
  );
};

export default AppButton;
