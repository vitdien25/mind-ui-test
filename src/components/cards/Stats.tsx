import { Progress } from "antd";
import styles from "./Card.module.scss";

interface Stat {
  label: string;
  value: number;
}

interface StatsProps {
  stats: Stat[];
}

const Stats = ({ stats }: StatsProps) => {
  return (
    <div className={styles.statContainer}>
      {stats.map((stat, index) => (
        <div key={index} className={styles.statItem}>
          <span className={styles.statLabel}>{stat.label}</span>
          <div className={styles.statValueContainer}>
            <span className={styles.statValue}>{stat.value} / 100</span>
            <Progress
              percent={stat.value}
              showInfo={false}
              strokeColor={"#305680"}
              strokeLinecap="butt"
              className={styles.progress}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
