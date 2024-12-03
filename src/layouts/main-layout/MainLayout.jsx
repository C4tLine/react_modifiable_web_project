import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "@consta/uikit/Layout";

import Footer from "../../components/footer/Footer";
import Menu from "../../components/menu/Menu";
import Header from "../../components/header/Header";
import './MainLayout.css';

const MainLayout = () => {
  
  return (
    <div>
      <Layout>
        <Menu />
        <Header />
      </Layout>
      <hr className="divider" />
      <main>
        <Outlet />
      </main>
      <hr className="divider" />
      <Footer />
    </div>
  );
}

export default MainLayout;
