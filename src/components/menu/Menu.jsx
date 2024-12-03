import React from "react";
import { Button } from "@consta/uikit/Button";
import { Layout } from "@consta/uikit/Layout";
import { Link } from "react-router-dom";

import "./Menu.css";

const Menu = () => {
    return (
        <Layout flex={1} className="Menu">
            <Link to="/" className="nav-button button-margin">
                <Button label="Главная страница" className="nav-button" />
            </Link>
            <Link to="/services" className="nav-button button-margin">
                <Button label="Услуги компании" className="nav-button" />
            </Link>
        </Layout>
    )
}

export default Menu;
