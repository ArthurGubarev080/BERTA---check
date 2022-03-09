import React, { useState, useEffect, useContext } from "react";
import { imgImport } from "../utils/imgImport";
import "antd/dist/antd.css";
import { Table, Tag } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Pagination } from "antd";
import { Dropdown } from "antd";
import userDataContext from "../context/usersDataContext";
import { Layout, Menu } from "antd";
import { Input } from "antd";
import "./Cars.css";
import { useNavigate } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;

const MainPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();
    const { userData, setUserData } = useContext(userDataContext);
    const [filteredData, setFilteredData] = useState(userData);
    useEffect(() => {
        setFilteredData(
            userData.filter((item) =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm]);

    const columns = [
        {
            title: "Клиент",
            dataIndex: "name",
            key: "name",
            render: (val, item) => {
                return (
                    <>
                        <Tag color={"rgba(250, 173, 20, 1)"}>
                            {item.tags[0]}
                        </Tag>
                        {val}
                    </>
                );
            },
        },
        {
            title: "Потребность",
            dataIndex: "need",
            key: "need",
        },
        {
            title: "Дата, время",
            dataIndex: "date",
            key: "date",
        },
        {
            title: "Отдел/ Ответственный",
            key: "department",
            dataIndex: "department",
        },
        {
            title: "Этап",
            key: "action",
            dataIndex: "action",
        },
    ];

    //Input строка
    const { Search } = Input;
    const onSearch = (value) => console.log(value);

    //Layot боковой
    const { Header, Content, Footer, Sider } = Layout;

    //Всплывающее каскадное меню
    const { SubMenu } = Menu;

    const menu = (
        <Menu>
            <Menu.ItemGroup className="departments" title="Все отделы">
                <Menu.Item href="/auto">Автомобили с пробегом</Menu.Item>
                <Menu.Item href="/newauto">Новые автомобили</Menu.Item>
                <Menu.Item href="/autoger">Сервисный отдел</Menu.Item>
                <Menu.Item href="/autostep">Отдел прав потребителя</Menu.Item>
            </Menu.ItemGroup>
        </Menu>
    );
    const menusecond = (
        <Menu>
            <Menu.ItemGroup className="departments" title="Активные">
                <Menu.Item>Активные услуги</Menu.Item>
                <Menu.Item>Возможности при покупке</Menu.Item>
                <Menu.Item>Продажа с обменом</Menu.Item>
            </Menu.ItemGroup>
        </Menu>
    );
    return (
        <>
            <Content className="content-all">
                <div className="abouter">
                    <div className="placse">Задачи</div>
                    <button className="plusphot">
                        <img
                            className="plusphot-ph"
                            src={imgImport("Group 1593.png")}
                        />
                    </button>
                </div>
                <div className="menubar">
                    <div className="menubar-list">
                        <Dropdown overlay={menu}>
                            <a
                                className="menubar-item-first"
                                onClick={(e) => e.preventDefault()}
                            >
                                Все отделы <DownOutlined />
                            </a>
                        </Dropdown>
                        <Dropdown overlay={menusecond}>
                            <a
                                className="menubar-item-second"
                                onClick={(e) => e.preventDefault()}
                            >
                                Активные <DownOutlined />
                            </a>
                        </Dropdown>
                        <div className="box">
                            <form className="creative">
                                <Search
                                    className="input-search"
                                    placeholder="Поиск по словам, номеру"
                                    onSearch={onSearch}
                                    enterButton
                                    onChange={(e) =>
                                        setSearchTerm(e.target.value)
                                    }
                                />
                            </form>
                        </div>
                    </div>
                </div>
                <div className="site-layout-background">
                    <Table
                        onRow={(record, rowIndex) => {
                            return {
                                onClick: (event) => {
                                    navigate(`/cars/${record.key}`);
                                },
                            };
                        }}
                        columns={columns}
                        dataSource={filteredData}
                        pagination={false}
                        className="table-cars"
                    />
                    <div className="pagination-slide">
                        <div className="pagination-str">1-10 из 100 стр</div>
                        <Pagination
                            defaultCurrent={6}
                            total={500}
                            className="pagination-form"
                        />
                    </div>
                </div>
            </Content>
        </>
    );
};

export default MainPage;
