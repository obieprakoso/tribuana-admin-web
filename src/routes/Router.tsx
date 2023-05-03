import { Routes, Route, useLocation } from "react-router-dom";

//import ProtectRoute from "./ProtectRouter";
// import { User, AddUser } from "../pages/menu_management/user";
// import AuthLayout from "../components/layouts/Layout";
// import BerandaPage from "../pages/beranda/BerandPage";
import LoginPage from "../pages/login/container/LoginPageContainer";
import BerandaPage from "../pages/beranda/container/BerandaPageContainer";
import NotFoundPage from "../pages/notFound/NotFoundPage";
import ProtectRoute from "./ProtectRouter";
import MainPageLayout from "../pages/layout/MainPageLayout";
import OccupantsPage from "../pages/occupants/container/OccupantsPageContainer";
import AddOccupantsPageLayout from "../pages/occupants/layout/AddOccupantsPageLayout";

const Router = () => {
  const location = useLocation();
  return location.pathname === "/" ? (
    <Routes>
      <Route path="/" element={<LoginPage />} />
    </Routes>
  ) : (
    <MainPageLayout>
      <Routes>
        <Route
          path="/beranda"
          element={
            <ProtectRoute>
              <BerandaPage />
            </ProtectRoute>
            // <ProtectRoute>
            //   <MainPageLayout />
            // </ProtectRoute>
          }
        />
        <Route
          path="/penghuni"
          element={
            <ProtectRoute>
              <OccupantsPage />
            </ProtectRoute>
          }
        />
        <Route
          path="/penghuni/add"
          element={
            <ProtectRoute>
              <AddOccupantsPageLayout />
            </ProtectRoute>
          }
        />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </MainPageLayout>
  );
  // <AuthLayout>
  //   <Routes>
  //     <Route path="/beranda" element={<ProtectRoute><BerandaPage /></ProtectRoute>} />
  //     <Route path="/" element={<Login />} />
  //     <Route
  //       path="/menu-management/user"
  //       element={
  //         <ProtectRoute>
  //           <User />
  //         </ProtectRoute>
  //       }
  //     />

  //     <Route path="/*" element={<ProtectRoute><NotFoundPage /></ProtectRoute>} />
  //   </Routes>
  // </AuthLayout>
};

export default Router;
