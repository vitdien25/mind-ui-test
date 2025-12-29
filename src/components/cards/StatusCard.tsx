import { MdOutlineArrowOutward } from "react-icons/md";
import styles from "./Card.module.scss";

const cardColors: { [key: string]: string } = {
  blue: "#c6d6f860",
  red: "#ffebebd5",
};

interface StatusCardProps {
  label: string;
  color?: string;
  data: number;
  icon?: React.ReactNode;
}
const StatusCard = ({ label, color, data, icon }: StatusCardProps) => {
  return (
    <div
      className={styles.statusCard}
      style={{ backgroundColor: color ? cardColors[color] : "white" }}
    >
      <div className={styles.statusCardHeader}>
        {label}
        <MdOutlineArrowOutward />
      </div>
      <span className={styles.statusCardData}>
        {data} {icon}
      </span>
    </div>
  );
};

export default StatusCard;
