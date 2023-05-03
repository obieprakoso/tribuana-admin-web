import React, { FC, useState, useEffect } from "react";
import { Table, Spin } from "antd";
import type { ColumnsType } from "antd/es/table";
import ColumnAttributes from "../../../../interface/ColumnAttributes";

interface DataTypeOccupants {
  data: Array<any>;
  columns: ColumnsType<ColumnAttributes>;
  // useAction: boolean;
  isLoading: boolean;
  // action?: JSX.Element | JSX.Element[];
}
const TableOccupantsLayout: FC<DataTypeOccupants> = ({
  data,
  columns,
  // useAction,
  isLoading,
  // action
}) => {
  return (
    <div>
      <Table loading={isLoading} columns={columns} dataSource={data} />
      {/* <Spin size="large" spinning={isLoading}>
        <Table columns={columns} dataSource={data} />
      </Spin> */}
    </div>
  );
};
export default TableOccupantsLayout;
