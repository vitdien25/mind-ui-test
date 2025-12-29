import styles from "./Container.module.scss";

interface ContainerProps {
  leftHeader?: React.ReactNode;
  rightHeader?: React.ReactNode;
  children?: React.ReactNode;
  alighnHeader?: "start" | "end";
  headerHeight?: number;
  containerHeight?: number;
}

const Container = ({
  leftHeader,
  rightHeader,
  children,
  alighnHeader,
  headerHeight,
  containerHeight,
}: ContainerProps) => {
  return (
    <div className={styles.container} style={{ height: containerHeight ? containerHeight : "100%" }}>
      <div
        className={styles.containerHeader}
        style={{
          alignItems: alighnHeader ? alighnHeader : "center",
          height: headerHeight ? headerHeight : 50,
        }}
      >
        <span>{leftHeader}</span>
        <span>{rightHeader}</span>
      </div>
      <div className={styles.containerContent}>{children}</div>
    </div>
  );
};

export default Container;
