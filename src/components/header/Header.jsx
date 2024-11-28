import { Button } from "@consta/uikit/Button";
import { Layout } from "@consta/uikit/Layout";
import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {

    return (
        <Layout>
            <NavLink to="/">
                <Button label="ФИО" />
            </NavLink>
            <NavLink to="/">
                <Button label="Вход" />
            </NavLink>
        </Layout>
    )
}

export default Header;
