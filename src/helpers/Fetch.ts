import Axios, { AxiosRequestConfig } from "axios";
import jwt_decode from "jwt-decode";
import AuthAttributes from "../interface/AuthUserInterface";
import AuthUser from "./AuthUser";

const Http = Axios.create({
  baseURL: "https://tribuana-api.vercel.app/api/",
  timeout: 100000,
  headers: { "content-type": "application/json" },
});

Http.interceptors.request.use(
  async (req: AxiosRequestConfig) => {
    const user = AuthUser.GetAuth();

    if (req.headers?.Authorization) {
      const authHeader = req.headers?.Authorization;

      const currentToken = authHeader && authHeader.toString().split(" ")[1];

      const decoded: any = currentToken && jwt_decode(currentToken);

      const expired = decoded?.exp;

      const currentDate = new Date();

      if (expired * 1000 < currentDate.getTime()) {
        const resData = await Http.post(
          "https://tribuana-api.vercel.app/api/auth/accessToken",
          {
            refreshToken: user?.refreshToken, //Second param will be your body
          },
          { withCredentials: true }
        );
        const response: AuthAttributes = {
          id: resData.data?.data?.id,
          name: resData.data?.data?.name,
          no_unit: resData.data?.data?.no_unit,
          no_tlp: resData.data?.data?.no_tlp,
          email: resData.data?.data?.email,
          role: resData.data?.data?.role,
          accessToken: resData.data?.data?.accessToken,
          refreshToken: resData.data?.data?.refreshToken,
        };

        req.headers.Authorization = `Bearer ${resData?.data?.data?.accessToken}`;

        AuthUser.SetAuth(response);
      }
    }

    return req;
  },
  (err: any) => {
    return Promise.reject(err);
  }
);

Http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

export default Http;
