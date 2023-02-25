import { Routes, Route } from "react-router-dom";

import ProtectRoute from "./ProtectRouter";
import { User, AddUser } from "../pages/menu_management/user";
import AuthLayout from "../components/layouts/Layout";
import BerandaPage from "../pages/beranda/BerandPage";
import { Login } from "../pages/auth";
import { NotFoundPage } from "../pages";

const Router = () => {
  return (
    <AuthLayout>
      <Routes>
        <Route path="/beranda" element={<ProtectRoute><BerandaPage /></ProtectRoute>} />
        <Route path="/" element={<Login />} />
        <Route
          path="/menu-management/user"
          element={
            <ProtectRoute>
              <User />
            </ProtectRoute>
          }
        />
        <Route
          path="/menu-management/user/add"
          element={
            <ProtectRoute>
              <AddUser />
            </ProtectRoute>
          }
        />

        <Route path="/*" element={<ProtectRoute><NotFoundPage /></ProtectRoute>} />
      </Routes>
    </AuthLayout>
  );
};

export default Router;
