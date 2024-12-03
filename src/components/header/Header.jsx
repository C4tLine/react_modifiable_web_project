import React from "react";
import { Button } from "@consta/uikit/Button";
import { Layout } from "@consta/uikit/Layout";
import { NavLink } from "react-router-dom";

import "./Header.css";

const Header = () => {

    return (
        <Layout  className="Header">
            <NavLink to='/profile'>
                <Button label='ФИО' />
            </NavLink>
            <NavLink to='/login'>
                <Button label='Вход' />
            </NavLink>
        </Layout>
    )
}

export default Header;
