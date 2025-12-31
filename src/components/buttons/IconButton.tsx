import { Button } from "antd";
import styles from "./Button.module.scss";
interface IconButtonProps {
  icon: React.ReactNode;
  isDisabled?: boolean;
}
const IconButton = ({ icon, isDisabled }: IconButtonProps) => {
  return (
    <Button type="text" className={styles.iconButton} disabled={isDisabled}>
      {icon}
    </Button>
  );
};

export default IconButton;
