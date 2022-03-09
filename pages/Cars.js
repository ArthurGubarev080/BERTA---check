import React, { Component, useState, useEffect, useContext } from "react";
import { Layout } from "antd";
import { imgImport } from "../utils/imgImport";
import "../pages/Cars.css";
import "antd/dist/antd.css";
import { Steps, Button, message } from "antd";
import { useNavigate, Outlet, useParams } from "react-router-dom";
import MainPage from "../pages/MainPage.js";
import Card from "./Card.js";
import Point from "./Point";
import { Table, Switch, Radio, Form, Space, Divider, Cascader } from "antd";
import { DownOutlined } from "@ant-design/icons";
import userDataContext from "../context/usersDataContext";
const { Header, Footer, Sider, Content } = Layout;
const { Step } = Steps;

const options = [
    {
        value: "Toyota",
        label: "Toyota",
        children: [
            {
                value: "Camry",
                label: "Camry",
            },
            {
                value: "Land Cruiser Prado",
                label: "Land Cruiser Prado",
            },
            {
                value: "Land Cruiser 300",
                label: "Land Cruiser 300",
            },
            {
                value: "Rav-4",
                label: "Rav-4",
            },
        ],
    },
    {
        value: "Porsche",
        label: "Porsche",
        children: [
            {
                value: "Panamera",
                label: "Panamera",
            },
            {
                value: "911",
                label: "911",
            },
            {
                value: "911 Carrera",
                label: "911 Carrera",
            },
            {
                value: "Macan",
                label: "Macan",
            },
        ],
    },
];

function onChange(value) {
    console.log(value);
}
const columns = [
    { title: "Автомобиль", dataIndex: "auto", key: "auto" },
    { title: "Цвет", dataIndex: "color", key: "color" },
    { title: "Комплектация", dataIndex: "complectation", key: "complectation" },
    { title: "Статус", dataIndex: "status", key: "status" },
    { title: "Условия", dataIndex: "competition", key: "competition" },
    { title: "Цена", dataIndex: "price", key: "price" },
    {
        title: "Действие",
        dataIndex: "about",
        key: "about",
        render: () => <a className="ant-dropdown-link">Подробнее</a>,
    },
];

const data = [
    {
        ownerId: 2,
        ownerId: 3,
        key: "1",
        auto: "Toyota Camry",
        color: "Чёрный",
        complectation: "Комфорт (МТ)",
        status: "В наличии",
        competition: "Trade in ",
        price: "11 210 000 ",
        about: "Подробнее",
    },
    {
        ownerId: 2,
        ownerId: 3,
        key: "2",
        auto: "Toyota Land Cruiser Prado",
        color: "071",
        complectation: "Престиж (7 мест)",
        status: "В наличии",
        competition: "Доукомп. 500 000",
        price: "32 320 000 ",
        about: "Подробнее",
    },
    {
        key: "3",
        auto: "Toyota Land Cruiser Prado",
        color: "055",
        complectation: "Комфорт Плюс",
        status: "14.05.2022",
        competition: "3 условии",
        price: "28 170 000 ",
        about: "Подробнее",
    },
    {
        ownerId: 2,
        ownerId: 3,
        key: "4",
        auto: "Toyota Corolla",
        color: "Белый",
        complectation: "Престиж",
        status: "В наличии",
        competition: "Без условии ",
        price: "11 210 000",
        about: "Подробнее",
    },
    {
        key: "5",
        auto: "Toyota Corolla",
        color: "Красный",
        complectation: "Стиль",
        status: "07.02.2022",
        competition: "Доукомп. 1 000 000",
        price: "11 210 000",
        about: "Подробнее",
    },
    {
        key: "6",
        auto: "Toyota HIGHLANDER",
        color: "111",
        complectation: "Престиж",
        status: "13.04.2022",
        competition: "Без условии ",
        price: "28 170 000  ",
        about: "Подробнее",
    },
    {
        ownerId: 6,
        key: "7",
        auto: "Toyota RAV4",
        color: "114",
        complectation: "Престиж",
        status: "13.04.2022",
        competition: "Без условии ",
        price: "18 170 000  ",
        about: "Подробнее",
    },
    {
        ownerId: 7,
        key: "8",
        auto: "Toyota Land Cruiser 200",
        color: "141",
        complectation: "Престиж",
        status: "13.04.2022",
        competition: "Без условии ",
        price: "48 170 000  ",
        about: "Подробнее",
    },
    {
        ownerId: 8,
        key: "9",
        auto: "Toyota Camry 75",
        color: "181",
        complectation: "Престиж",
        status: "13.04.2022",
        competition: "Без условии ",
        price: "18 170 000  ",
        about: "Подробнее",
    },
];

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(
            `selectedRowKeys: ${selectedRowKeys}`,
            "selectedRows: ",
            selectedRows
        );
    },
    getCheckboxProps: (record) => ({
        disabled: record.name === "Disabled User",
        name: record.name,
    }),
};
const steps = [
    {
        title: "Заявка",
        content: "true",
    },
    {
        title: "Тест-драйв",
        content: "Second-content",
    },
    {
        title: "Предпродажа",
        content: "Last-content",
    },
    {
        title: "Контракт",
        content: "Last-content",
    },
    {
        title: "Выдача",
        content: "Last-content",
    },
];

const Cars = () => {
    const { userData } = useContext(userDataContext);

    const { id } = useParams();
    const [user, setUser] = useState(
        userData.filter((user) => user.key === id)[0]
    );

    const navigate = useNavigate();

    const [current, setCurrent] = React.useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };
    const [selectionType, setSelectionType] = useState("checkbox");
    const title = () => "Here is title";
    const showHeader = true;

    return (
        <div>
            <>
                <Layout className="big-page">
                    <Header style={{ backgroundColor: "white" }}>
                        <Steps className="layout-header__bg" current={current}>
                            {steps.map((item) => (
                                <Step key={item.title} title={item.title} />
                            ))}
                        </Steps>
                        <button className="chat-orange">
                            <img
                                className="chat-photo-element"
                                src={imgImport("Vector (8).png")}
                            ></img>
                        </button>
                    </Header>
                    <Content>
                        <div className="content-check-form">
                            <div className="two-card">
                                <Card user={user} />
                                <Point />
                            </div>
                            <div className="cars-selection-table">
                                <div className="one-table">
                                    <Radio.Group
                                        onChange={({ target: { value } }) => {
                                            setSelectionType(value);
                                        }}
                                        value={selectionType}
                                    ></Radio.Group>
                                    <div className="input-group-second">
                                        <div className="input-group-se">
                                            <Cascader
                                                options={options}
                                                onChange={onChange}
                                                placeholder="Модель"
                                            />
                                            <Cascader
                                                options={options}
                                                onChange={onChange}
                                                placeholder="Цвет"
                                            />
                                            <Cascader
                                                options={options}
                                                onChange={onChange}
                                                placeholder="Цена до"
                                            />
                                            <Cascader
                                                options={options}
                                                onChange={onChange}
                                                placeholder="Статус"
                                            />
                                            <div className="">Cбросить</div>
                                        </div>
                                    </div>
                                    <Table
                                        rowSelection={{
                                            type: selectionType,
                                            ...rowSelection,
                                        }}
                                        columns={columns}
                                        dataSource={data.filter(
                                            (car) => car.ownerId == id
                                        )}
                                        pagination={false}
                                    ></Table>
                                </div>
                            </div>
                        </div>
                    </Content>
                    <Footer>
                        <div className="steps-action">
                            {current < steps.length - 1 && (
                                <Button
                                    type="primary"
                                    onClick={() => navigate("/cars/")}
                                    className="button-first"
                                >
                                    Далее
                                </Button>
                            )}
                            {current === steps.length - 1 && (
                                <Button
                                    type="primary"
                                    onClick={() =>
                                        message.success("Processing complete!")
                                    }
                                    className="button-second"
                                >
                                    Завершить
                                </Button>
                            )}
                            {current > 0 && (
                                <Button
                                    style={{ margin: "0 8px" }}
                                    onClick={() => prev()}
                                >
                                    Назад
                                </Button>
                            )}
                        </div>
                    </Footer>
                </Layout>
            </>
            <Outlet />
        </div>
    );
};

export default Cars;
