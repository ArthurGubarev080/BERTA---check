import React, { useContext, createContext } from "react";
import { imgImport } from "./utils/imgImport";
import "./css/style.css";
import "antd/dist/antd.css";
import { Tag } from "antd";
import { Input } from "antd";
import { Layout, Menu } from "antd";
import { Routes, Route, useNavigate } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SideBar from "../src/components/SideBar";
import Cars from "./pages/Cars";
import Nino from "./ThirdPages/Nino";
import Element from "./FourthPages/Element";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Settinngs from "./FifthPages/Settinngs";
import userDataContext from "./context/usersDataContext";

const App = () => {
    const navigate = useNavigate();
    const { userData, setUserData } = useContext(userDataContext);
    console.log(userData);
    return (
        <userDataContext.Provider value={{ userData, setUserData }}>
            <div className="purpose">
                <header className="poison">
                    <Layout>
                        <SideBar></SideBar>
                        <Layout>
                            <Routes>
                                <Route
                                    exact
                                    path="/"
                                    element={<MainPage />}
                                ></Route>
                                <Route
                                    path="cars/:id"
                                    element={<Cars />}
                                ></Route>
                                <Route path="/nino" element={<Nino />}></Route>
                                <Route
                                    path="/element"
                                    element={<Element />}
                                ></Route>
                                <Route
                                    path="/settinngs"
                                    element={<Settinngs />}
                                ></Route>
                            </Routes>
                        </Layout>
                    </Layout>
                </header>
            </div>
        </userDataContext.Provider>
    );
};

const columns = [
    {
        title: "Клиент",
        dataIndex: "name",
        key: "name",
        render: (val, item) => {
            return (
                <>
                    <Tag color={"rgba(250, 173, 20, 1)"}>{item.tags[0]}</Tag>
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

// const menu = (
//     <Menu>
//         <Menu.ItemGroup title="Все отделы">
//             <Menu.Item href="/auto">Автомобили с пробегом</Menu.Item>
//             <Menu.Item href="/newauto">Новые автомобили</Menu.Item>
//             <Menu.Item href="/autoger">Сервисный отдел</Menu.Item>
//             <Menu.Item href="/autostep">Отдел прав потребителя</Menu.Item>
//         </Menu.ItemGroup>
//     </Menu>
// );
// const menusecond = (
//     <Menu>
//         <Menu.ItemGroup title="Активные">
//             <Menu.Item>Активные услуги</Menu.Item>
//             <Menu.Item>Возможности при покупке</Menu.Item>
//             <Menu.Item>Продажа с обменом</Menu.Item>
//         </Menu.ItemGroup>
//     </Menu>
// );
export default App;
