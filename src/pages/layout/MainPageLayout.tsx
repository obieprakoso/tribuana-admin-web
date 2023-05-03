import React, { useState } from "react";
import {
    HomeOutlined,
    UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu, MenuProps, theme } from "antd";
import { useNavigate } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;
const items: MenuProps["items"] = [
    {
        label: "Beranda",
        key: "/beranda",
        icon: <HomeOutlined />,
    },
    {
        label: "Penguni",
        key: "/penghuni",
        icon: <UserOutlined />,
    },

];

interface Content {
    children: React.ReactNode;
}

const MainPageLayout: React.FC<Content> = ({ children }) => {
    const navigate = useNavigate();
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const [current, setCurrent] = useState("/beranda");

    const onClick: MenuProps["onClick"] = (e) => {
        navigate(e.key);
        setCurrent(e.key);
    };

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Sider
                style={{ width: "180px" }}
                breakpoint="lg"
                width={250}
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <div className="pt-5 pb-5 px-6">
                    <a href="#!">
                        <div className="flex items-center">
                            <div className="shrink-0">
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
                                    className="rounded-full w-10"
                                    alt="Avatar"
                                />
                            </div>
                            <div className="grow ml-3">
                                <p className="text-sm font-semibold text-blue-600">
                                    Obie Jagad Prakoso
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
                <Menu
                    theme="dark"
                    onClick={onClick}
                    selectedKeys={[current]}
                    mode="vertical"
                    items={items}
                />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }} />
                <Content style={{ margin: "24px 16px 0" }}>
                    {children}
                </Content>
                <Footer style={{ textAlign: "center" }}>
                    Ant Design ©2023 Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};

export default MainPageLayout;
