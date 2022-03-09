import React, { Component, useState, useEffect } from "react";
import { Input, Layout } from "antd";
import { imgImport } from "../../../utils/imgImport";
import "../../Cars.css";
import "antd/dist/antd.css";
import { Steps, Button, message } from "antd";
import { useNavigate, Outlet } from "react-router-dom";
import "./pages/Card.js";
import "./pages/Point.js";

const { Header, Footer, Sider, Content } = Layout;
const { Step } = Steps;

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

const FirstStep = () => {
    const navigate = useNavigate();

    const [current, setCurrent] = React.useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };
    return (
        <div>
            <>
                <Layout>
                    <Header style={{ backgroundColor: "white" }}>
                        <Steps className="layout-header__bg" current={current}>
                            {steps.map((item) => (
                                <Step key={item.title} title={item.title} />
                            ))}
                        </Steps>
                    </Header>
                    <Content></Content>
                    <Footer>
                        <div className="steps-action">
                            {current < steps.length - 1 && (
                                <Button
                                    type="primary"
                                    onClick={() => navigate("./info")}
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

export default FirstStep;
