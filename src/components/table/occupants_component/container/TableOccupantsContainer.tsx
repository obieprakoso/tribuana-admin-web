import React, { FC, useState, useEffect } from "react";
import TableOccupantsLayout from "../layout/TableOccupantsLayout";
import Http from "../../../../helpers/Fatch";
import { getCookie } from "../../../../helpers/CookieFunction";
import ListHeaderTableUser from "../../../../static/table/HeaderOccuant";

interface DataTypeOccupants {
    _id: number;
    name: string;
    email: string;
    no_unit: number;
    no_tlp: string;
    is_active: boolean;
}
const TableOccupantsContainer: FC = () => {
    const [dataOccupants, setDataOccupants] = useState<Array<DataTypeOccupants>>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const user = getCookie("auth");

    useEffect(() => {
        GetAllUser();
    }, []);

    const GetAllUser = async () => {
        setLoading(true);
        try {
            console.log("Hit");

            const res = await Http.get("users/getAllUserByActived/", {
                headers: { Authorization: `Bearer ${user?.accessToken}` },
            });

            setDataOccupants(res.data.data);
            setLoading(false);
        } catch (error: any) {
            console.log(error);
            setLoading(false);
        }
    };
    return (
        <TableOccupantsLayout columns={ListHeaderTableUser} data={dataOccupants} isLoading={loading} />
    );
};
export default TableOccupantsContainer;