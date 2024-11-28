import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../../components/header/Header";
import Menu from "../../components/menu/Menu";

const MainLayout = () => {
    return (
        <div>
            <Header />
            <hr />
            <main>
                <Outlet/>
            </main>
            <Menu />
        </div>
    )
}

export default MainLayout;
