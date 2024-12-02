import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from '@consta/uikit/Layout';
import style from './MainLayout.css'
import Header from "../../components/header/Header";
import Menu from "../../components/menu/Menu"
import Footer from "../../components/footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <Layout className={style.MainLayout}>
                <Layout flex={1} className="button-group">
                    <Menu />
                </Layout>
                <Layout flex={0} className="button-group">
                    <Header />
                </Layout>
            </Layout>
            <hr className="divider" />
            <main>
                <Outlet />
            </main>
            <hr className="divider" />
                <Layout className="Footer">
                    <Footer />
                </Layout>
        </div>
    );
}

export default MainLayout;
