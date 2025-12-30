import { Table } from "antd";
import type { ColumnType } from "antd/es/table";
import type { TablePaginationConfig } from "antd/es/table/interface";
import type React from "react";

interface EntitiesTableProps<T> {
  columns?: ColumnType<T>[];
  dataSource?: T[];
  pagination?: TablePaginationConfig | false;
  title?: React.ReactNode;
  bordered?: boolean;
}

const EntitiesTable = <T,>({
  columns,
  dataSource,
  pagination,
  title,
  bordered,
}: EntitiesTableProps<T>) => {
  return (
    <Table<T>
      rowSelection={{ type: "checkbox" }}
      columns={columns}
      dataSource={dataSource}
      pagination={pagination}
      title={title ? () => title : undefined}
      bordered={bordered}
      scroll={{ y: 450 }}
    />
  );
};

export default EntitiesTable;
