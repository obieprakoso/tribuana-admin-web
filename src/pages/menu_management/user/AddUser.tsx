import React, { FC, useState, useEffect } from "react";

import { Table } from "../../../components/table";

import { ListHeaderTableUser } from "../../../static/Table";
import AuthUser from "../../../helpers/AuthUser";
import Http from "../../../helpers/Fetch";
import ColumnAttributes from "../../../interface/ColumnInterface";
import { Loading } from "../../../components/loading_screen";

const AddUser: FC = () => {
    const user = AuthUser.GetAuth();
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<Array<any>>([]);

    // const SubmitAddUser = async () => {
    //     setLoading(true);
    //     try {
    //         const res = await Http.get("users/getAllUserByActived/", {
    //             headers: { Authorization: `Bearer ${user?.accessToken}` },
    //         });

    //         setData(res.data.data);
    //         setLoading(false);
    //     } catch (error: any) {
    //         console.log(error);
    //         setLoading(false);
    //     }
    // };

    const clearFormAddUser = () => { };

    return (
        <div>
            {loading ? (
                <Loading />
            ) : (
                <div>
                    Tambah User
                </div>
            )}
        </div>
    );
};

export default AddUser;
