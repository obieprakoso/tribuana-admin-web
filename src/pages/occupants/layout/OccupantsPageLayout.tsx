import React, { FC, useState, useEffect } from "react";
import TableOccupantsContainer from "../../../components/table/occupants_component/container/TableOccupantsContainer";
import { Button, ConfigProvider } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const OccupantsPageLayout: FC = () => {
    const navigate = useNavigate();
    return (
        <div className="pt-5">
            <div className="pb-5 float-right" >
                <ConfigProvider
                    theme={{
                        token: {
                            colorPrimary: '#00b96b',
                        },
                    }}
                >
                    <Button type="primary" shape="round" icon={<UserAddOutlined />} onClick={() => navigate("/penghuni/add")}>Tambah Penghuni</Button>
                </ConfigProvider>

            </div>
            <div>
                <TableOccupantsContainer />
            </div>
        </div>
    );
};
export default OccupantsPageLayout;