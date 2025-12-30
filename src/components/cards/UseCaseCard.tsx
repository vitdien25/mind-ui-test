import Tooltip from "antd/es/tooltip";
import styles from "./Card.module.scss";

interface UseCaseCardProps {
  imageSrc?: string;
  label?: string;
}
const UseCaseCard = ({ imageSrc, label }: UseCaseCardProps) => {
  return (
    <div className={styles.demoCard}>
      <Tooltip
        classNames={styles.tooltip}
        placement="bottom"
        color={"#fff"}
        title={
          <img
            src={imageSrc ? imageSrc : "./src/assets/dogaccepttingfate.jpg"}
            alt={label}
            width={480}
            height={240}
          />
        }
      >
        <img
          src={imageSrc ? imageSrc : "./src/assets/dogaccepttingfate.jpg"}
          alt={label}
        />
      </Tooltip>
      <div className={styles.label}>{label ? label : "????????"}</div>
    </div>
  );
};

export default UseCaseCard;
