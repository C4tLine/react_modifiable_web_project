import React, { useEffect, useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { Layout } from "@consta/uikit/Layout";
import { Button } from "@consta/uikit/Button";
import { User } from "@consta/uikit/User";
import { useDispatch, useSelector } from "react-redux";
import { Text } from "@consta/uikit/Text";
import { dropToken, getToken } from "../../store/token";
import { setUser } from "../../store/store";

import Footer from "../../components/footer/Footer";
import Menu from "../../components/menu/Menu";
// import Header from "../../components/header/Header";
import './MainLayout.css';

const MainLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const [loading, setLoading] = useState(true);
  const userToken = getToken();

  useEffect(() => {
    if (user) {
      setLoading(false);
      return;
    }

    const fetchUserInfo = async () => {
      if (!userToken) {
        console.error("Token not found");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch("https://dummyjson.com/auth/me", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });

        if (!response.ok) {
          dispatch(setUser(null));
          throw new Error("Couldn't uploaded user info");
        }

        const userInfo = await response.json();
        dispatch(setUser(userInfo));
      } catch (error) {
        console.error("Error while tryed load user info:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, [dispatch, navigate, user, userToken]);

  const handleLogout = () => {
    dropToken();
    dispatch(setUser(null));
    navigate("/login");
  };

  if (loading) {
    return <Text size="l">Загрузка...</Text>;
  }

  return (
    <div>
      <Layout>
        <Menu />
        <Layout flex={0} className="button-group">
          <Link to="/profile" className="nav-button button-margin">
            <Button
              label={
                user ? (
                  <User name={user.firstName} avatarUrl={user.image} />
                ) : (
                  <User name="ФИО" />
                )
              }
              className="nav-button profile-button"
            />
          </Link>
          {!user ? (
            <Link to="/login" className="nav-button button-margin">
              <Button label={'Вход'} className="nav-button" />
            </Link>
          ) : (
            <Button label={'Выход'} className="nav-button button-margin" onClick={handleLogout} />
          )}
        </Layout>
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
