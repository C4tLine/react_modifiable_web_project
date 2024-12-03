import React, {useEffect, useState} from "react";
import { Button } from "@consta/uikit/Button";
import { Layout } from "@consta/uikit/Layout";
import { Link, useNavigate } from "react-router-dom";
import { User } from "@consta/uikit/User";
import { Loader } from '@consta/uikit/Loader';

import { useDispatch, useSelector } from "react-redux";
import { dropToken, getToken } from "../../store/token";

import { setUser } from "../../store/store";
import "./Header.css";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);
  
    const [isLoading, setLoading] = useState(true);
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
      dispatch(setUser(!user));
      navigate("/login");
    };
  
    if (isLoading) {
      return (
        <div className="loader"><Loader size="m" /></div>
      );
    }

    return (
        <Layout flex={0} className="button-group">
          <Link to= {user ? ("/profile") : ("/login")} className="nav-button button-margin">
            <Button
              label={
                user ? (
                  <User name={user.firstName} avatarUrl={user.image} />
                ) : (
                  <User name="ФИО"></User>
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
    )
}

export default Header;
