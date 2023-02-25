import React, { FC, useState, useEffect } from "react";
import { Loading } from "../../../components/loading_screen";

import { Table } from "../../../components/table";

import AuthUser from "../../../helpers/AuthUser";
import Http from "../../../helpers/Fetch";
import ColumnAttributes from "../../../interface/ColumnInterface";

const ViewMenu: FC = () => {
  const user = AuthUser.GetAuth();
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Array<any>>([]);
  const [column, setColumn] = useState<Array<ColumnAttributes>>([
    {
      heading: "ID",
      keyValue: "id",
    },
    {
      heading: "Nama Menu",
      keyValue: "name",
    },
    {
      heading: "Order Data",
      keyValue: "ordering",
    },
    {
      heading: "Device",
      keyValue: "device",
    },
    {
      heading: "Status",
      keyValue: "status",
    },
  ]);

  useEffect(() => {
    GetMasterMenu();
  }, []);

  const GetMasterMenu = async () => {
    setLoading(true);
    try {
      const res = await Http.get("/menu", {
        headers: { Authorization: `Bearer ${user?.accessToken}` },
      });

      setData(res.data.data);
      setLoading(false);
    } catch (error: any) {
      console.log(error);
      setLoading(false);
    }
  };

  const onDelete = () => { };

  return loading ? (
    <Loading />
  ) : (
    <Table
      data={data}
      column={column}
      useAction={true}
      urlEdit="/master-menu"
      onDelete={onDelete}
      isLoading={false}
    />
  );
};

export default ViewMenu;
