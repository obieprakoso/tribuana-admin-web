import React, { FC, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Table } from "../../../components/table";

import { ListHeaderTableUser } from "../../../static/Table";
import AuthUser from "../../../helpers/AuthUser";
import Http from "../../../helpers/Fetch";
import ColumnAttributes from "../../../interface/ColumnInterface";
import { Loading } from "../../../components/loading_screen";
import Button, { ButtonProps } from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { styled } from '@mui/material/styles';
import { green } from '@mui/material/colors';
const User: FC = () => {
  const navigate = useNavigate();
  const user = AuthUser.GetAuth();
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Array<any>>([]);
  const [column, setColumn] =
    useState<Array<ColumnAttributes>>(ListHeaderTableUser);

  useEffect(() => {
    GetMasterMenu();
  }, []);

  const GetMasterMenu = async () => {
    setLoading(true);
    try {
      const res = await Http.get("users/getAllUserByActived/", {
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

  const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(green[500]),
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  }));

  const addData = () => { navigate("/menu-management/user/add") };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <div className="h-fit min-h-full flex justify-end">
            <ColorButton onClick={addData} variant="outlined" startIcon={<AddCircleOutlineIcon style={{ fill: "white" }} />}>
              <p style={{ color: "white" }}>Tambah</p>
            </ColorButton>
          </div>
          <div>
            <Table
              data={data}
              column={column}
              useAction={true}
              urlEdit="/master-menu"
              onDelete={onDelete}
              isLoading={loading}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default User;
