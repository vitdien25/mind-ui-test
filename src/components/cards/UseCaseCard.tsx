import { Image } from "antd";
import { Tooltip } from "antd";
import styles from "./Card.module.scss";

interface UseCaseCardProps {
  imageSrc?: string;
  label?: string;
}
const UseCaseCard = ({ imageSrc, label }: UseCaseCardProps) => {
  return (
    <div className={styles.demoCard}>
      <div className={styles.imageWrapper}>
        <img
          src={imageSrc ? imageSrc : "./src/assets/dogaccepttingfate.jpg"}
          alt={label}
        />
        <div className={styles.label}>{label ? label : "????????"}</div>
      </div>
    </div>
  );
};

export default UseCaseCard;
