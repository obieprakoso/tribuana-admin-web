import React, { FC, useState, useEffect } from "react";
import { Card, List, Space, Statistic, Col, Row, Divider } from "antd";
import {
    DollarCircleOutlined,
    ShoppingCartOutlined,
    ShoppingOutlined,
    UserOutlined,
} from "@ant-design/icons";
const data = [
    {
        title: "Users",
        count: "50",
        icon: (
            <UserOutlined
                style={{
                    color: "white",
                    // background: "background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);",
                    // borderRadius: 50,
                    fontSize: 50,
                    padding: 0,
                }}
            />
        ),
    },
    {
        title: "Uang Kas",
        count: "20",
        icon: (
            <DollarCircleOutlined
                style={{
                    color: "white",
                    // background: "linear-gradient(to right, transparent, white)",
                    // borderRadius: 20,
                    fontSize: 50,
                    padding: 0,
                }}
            />
        ),
    },
    {
        title: "Uang Sampah",
        count: "100",
        icon: (
            <ShoppingOutlined
                style={{
                    color: "white",
                    // backgroundColor: "rgba(0,0,255,0.25)",
                    // borderRadius: 20,
                    fontSize: 50,
                    padding: 0,
                }}
            />
        ),
    },
];
const CardBerandaCountingLayout: FC = () => {
    return (
        <div>
            <List
                grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 2,
                    lg: 3,
                    xl: 3,
                    xxl: 3,
                }}
                dataSource={data}
                renderItem={(item) => (
                    <List.Item>
                        <Card loading={false} bodyStyle={{ background: "linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)", borderRadius: 8 }}>
                            <Row>
                                <Col span={10}>
                                    <div className="flex h-full items-center">{item.icon}</div>
                                </Col>
                                <Col span={14}>
                                    <div>
                                        <p className="text-white text-4xl float-right font-bold">{item.count}
                                        </p>
                                        <Divider orientation="center" />
                                        <p className="text-white text-sm float-right">{item.title}</p>
                                    </div>
                                </Col>
                            </Row>
                            {/* <Space direction="horizontal">
                                {item.icon}
                                <Statistic title={<p className="float-left">{item.title}</p>} value={item.count} />
                            </Space> */}
                        </Card>
                    </List.Item>
                )}
            />
        </div>
    );
};
export default CardBerandaCountingLayout;
