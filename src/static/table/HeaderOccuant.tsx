import { Tag } from "antd";
import type { ColumnsType } from 'antd/es/table';
import ColumnAttributes from "../../interface/ColumnAttributes";
const ListHeaderTableUser: ColumnsType<ColumnAttributes> = [
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
    },
    {
        title: "Email",
        dataIndex: "email",
        key: "email",
    },
    {
        title: "Nomor Unit",
        dataIndex: "no_unit",
        key: "no_unit",
    },
    {
        title: "Nomor Telpon",
        dataIndex: "no_tlp",
        key: "no_tlp",
    },
    {
        title: "Status",
        key: "is_active",
        dataIndex: "is_active",
        render: (status: boolean) => (
            <Tag color={status ? "green" : "red"} key={status.toString()}>
                {status ? "AKTIF" : "TIDAK AKTIF"}
            </Tag>
        ),
    },
];

export default ListHeaderTableUser;
