import React from "react";
import { imgImport } from "../utils/imgImport";
import { Menu, Layout } from "antd";
import { useNavigate } from "react-router-dom";
import "../components/SideBar.css";

const { Sider } = Layout;
const SideBar = () => {
    const navigate = useNavigate();
    return (
        <>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <img
                    className="logo-brt"
                    src={imgImport("Group 1583.png")}
                ></img>
                <Menu mode="inline" defaultSelectedKeys={["1"]}>
                    <Menu.Item onClick={() => navigate("")} key="1">
                        <img
                            className="logo-brm"
                            src={imgImport("task.png")}
                        ></img>
                    </Menu.Item>
                    <Menu.Item onClick={() => navigate("")} key="2">
                        <img
                            className="logo-brm"
                            src={imgImport("Garage-photo.png")}
                        ></img>
                    </Menu.Item>
                    <Menu.Item onClick={() => navigate("/nino")} key="3">
                        <img
                            className="logo-brm"
                            src={imgImport("Group 1058 (1).png")}
                        ></img>
                    </Menu.Item>
                    <Menu.Item onClick={() => navigate("/element")} key="4">
                        <img
                            className="logo-brm"
                            src={imgImport("Group 1058 (2).png")}
                        ></img>
                    </Menu.Item>
                    <Menu.Item onClick={() => navigate("/settinngs")} key="5">
                        <img
                            className="logo-brm"
                            src={imgImport("Group 1058 (3).png")}
                        ></img>
                    </Menu.Item>
                </Menu>
            </Sider>
        </>
    );
};

export default SideBar;
