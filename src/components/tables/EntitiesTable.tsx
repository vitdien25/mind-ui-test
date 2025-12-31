import { Table } from "antd";
import type { ColumnType } from "antd/es/table";
import type { TablePaginationConfig } from "antd/es/table/interface";
import type React from "react";
import styles from "./Table.module.scss";

interface EntitiesTableProps<T> {
  columns?: ColumnType<T>[];
  dataSource?: T[];
  pagination?: TablePaginationConfig | false;
  leftHeader?: React.ReactNode;
  rightHeader?: React.ReactNode;
  bordered?: boolean;
}

const EntitiesTable = <T,>({
  columns,
  dataSource,
  pagination,
  leftHeader,
  rightHeader,
  bordered,
}: EntitiesTableProps<T>) => {
  return (
    <Table<T>
      className={styles.entitiesTable}
      rowSelection={{ type: "checkbox" }}
      columns={columns}
      dataSource={dataSource}
      pagination={pagination}
      title={
        leftHeader || rightHeader
          ? () => (
              <div className={styles.tableHeader}>
                <div className={styles.leftHeader}>{leftHeader}</div>
                <div className={styles.rightHeader}>{rightHeader}</div>
              </div>
            )
          : undefined
      }
      bordered={bordered}
      scroll={{ y: 450 }}
    />
  );
};

export default EntitiesTable;
