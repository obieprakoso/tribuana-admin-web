import { useLocation, Navigate } from "react-router-dom";
import AuthUser from "../helpers/AuthUser";

const ProtectRoute = ({ children }: { children: JSX.Element }) => {
  const user = AuthUser.GetAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectRoute;
