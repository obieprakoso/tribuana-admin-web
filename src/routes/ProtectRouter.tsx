import { useLocation, Navigate } from "react-router-dom";
import { getCookie } from "../helpers/CookieFunction";

const ProtectRoute = ({ children }: { children: JSX.Element }) => {
    const authCookie = getCookie("auth");
    const location = useLocation();
    if (!authCookie) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    return children;
};

export default ProtectRoute;
