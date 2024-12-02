import React from 'react';
import { Layout } from '@consta/uikit/Layout';
import style from "./Footer.css";

const Footer = () => {
    return (
        <Layout className={style.Footer}>
            <div>
                <p>© 2024 Моя компания</p>
            </div>
        </Layout>
    )
}

export default Footer;
