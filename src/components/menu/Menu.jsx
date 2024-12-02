import React from "react";
import { Button } from "@consta/uikit/Button";
import { Layout } from "@consta/uikit/Layout";
import { NavLink } from "react-router-dom";
import style from "./Menu.css";

const Menu = () => {
    return (
        <Layout className={style.Menu}>
            <NavLink to="/">
                <Button label="Главная страница" />
            </NavLink>
            <NavLink to="/service">
                <Button label="Страница услуг" />
            </NavLink>
        </Layout>
    )
}

export default Menu;
