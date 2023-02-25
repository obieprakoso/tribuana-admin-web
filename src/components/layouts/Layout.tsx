import React, { FC, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../header/Header";
import { Sidebar } from "../sidebar";
import Http from "../../helpers/Fetch";
import LoadingScreen from "../loading_screen/LoadingScreen";

import AuthUser from "../../helpers/AuthUser";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = AuthUser.GetAuth();
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const logout = async () => {
    setLoading(true);
    try {
      const res = await Http.post("/auth/logout", { refreshToken: user?.refreshToken }, {
        withCredentials: true,
        headers: { Authorization: `Bearer ${user?.accessToken}` },
      });
      console.log(res.data);
      AuthUser.RemoveAuth();
      navigate("/");
      setLoading(false);
    } catch (error: any) {
      console.log(error?.response);
      setLoading(false);
    }
  };

  return loading ? (
    <LoadingScreen />
  ) : (location.pathname !== "/" ?
    <div className="flex relative bg-gray-100 overflow-x-hidden min-h-screen antialiased">
      <Sidebar open={open} closeMenu={() => setOpen(!open)} />
      <div className="w-full relative ml-0 min-lg:ml-64">
        <Header logout={logout} changeOpen={() => setOpen(!open)} />
        <main className="m-5">{children}</main>
      </div>
    </div> : <main>{children}</main>
  );
};

export default AuthLayout;
