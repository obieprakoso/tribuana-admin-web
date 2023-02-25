import React, { FC, useState } from "react";
import Swal from "sweetalert2";
import {
  TextInputEmail,
  TextInputPassword,
} from "../../components/form_input";

import { Link, useNavigate } from "react-router-dom";

import InputValidation from "../../helpers/InputValidation";
import Http from "../../helpers/Fetch";
import AuthUser from "../../helpers/AuthUser";
import AuthAttributes from "../../interface/AuthUserInterface";

import LoadingButton from '@mui/lab/LoadingButton';

interface DataLogin {
  email?: string | null;
  password?: string | null;
}

const Login: FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<DataLogin>({
    email: "",
    password: "",
  });

  const [errData, setErrData] = useState<DataLogin>({
    email: "",
    password: "",
  });

  /* ------------------------------ OnChange Data ----------------------------- */
  const onChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    e.preventDefault();

    const { name, value } = e.target;

    let strErr = "";
    if (name === "email") {
      strErr = InputValidation.EmailValidation(value, 100, "Email", true);
    }
    if (name === "password") {
      strErr = InputValidation.PasswordValidation(
        value,
        4,
        12,
        "Password",
        true
      );
    }

    setErrData({
      ...errData,
      [name]: strErr,
    });

    setData({
      ...data,
      [name]: value,
    });
  };
  /* ------------------------------ End OnChange ------------------------------ */

  /* -------------------------------- OnSubmit -------------------------------- */
  const onSubmit = async () => {
    console.log("yyyyyyy");

    const valid = onValidation();
    if (valid) {
      setLoading(true);
      try {
        const response = await Http.post("auth/login/web", data, {
          withCredentials: true,
        });
        const responseData: AuthAttributes = {
          id: response.data?.data?.id,
          name: response.data?.data?.name,
          no_unit: response.data?.data?.no_unit,
          no_tlp: response.data?.data?.no_tlp,
          email: response.data?.data?.email,
          role: response.data?.data?.role,
          accessToken: response.data?.data?.accessToken,
          refreshToken: response.data?.data?.refreshToken,
        };
        setData({
          ...data,
          email: "",
          password: "",
        });

        AuthUser.SetAuth(responseData);
        setLoading(false);
        navigate("/beranda");
      } catch (error: any) {
        Swal.fire({
          icon: "error",
          text: "Invalid Credentials",
          title: "Oops!!",
        });
        setLoading(false);
      }
    }
  };
  /* ------------------------------ End OnSubmit ------------------------------ */

  /* ------------------------------ On Validation ----------------------------- */
  const onValidation = (): boolean => {
    const tempValidation: DataLogin = {
      email: InputValidation.EmailValidation(data.email, 100, "Email", true),
      password: InputValidation.PasswordValidation(
        data.password,
        4,
        12,
        "Password",
        true
      ),
    };

    setErrData(tempValidation);

    for (var key in tempValidation) {
      if ((tempValidation as any)[key] !== "") {
        return false;
      }
    }
    return true;
  };
  /* ---------------------------- End On Validation --------------------------- */

  return (
    <div>
      <div className="grid grid-cols-2">
        <section className="bg-[linear-gradient(to_right,#fc5c7d,#6a82fb)] relative h-screen max-ipad:hidden">
          <div className="m-auto h-max max-w-xl px-8 py-[calc(100vh-70%)] rounded-md text-white absolute top-0 bottom-0 left-0 right-0 bg-[rgba(249,249,249,0.24)]"></div>
        </section>
        <section className="min-ipad:relative">
          <form className="max-w-md m-auto h-max absolute top-0 bottom-0 left-0 right-0">
            <header className="px-3">
              <h1 className="text-[28px] font-bold">Welcome Back</h1>
              <p className="text-slate-400 text-base">
                Please enter your credentials
              </p>
            </header>
            <div className="mt-4 px-3">
              <TextInputEmail
                label="Email"
                name="email"
                required={true}
                onChange={onChange}
                error={errData.email}
                value={data.email}
                placeholder="user@gmail.com"
              />
              <TextInputPassword
                label="Password"
                name="password"
                required={true}
                onChange={onChange}
                error={errData.password}
                value={data.password}
                placeholder="password"
              />

              <div className="flex justify-end my-1">
                <Link
                  to="/forget-password"
                  className="text-sm text-blue-400 cursor-pointer no-underline hover:underline"
                >
                  Forget Password?
                </Link>
              </div>
            </div>
            <section className="px-3">
              <LoadingButton
                className="mt-2 bg-blue-400 w-full py-[6px] text-lg rounded-md text-white font-medium"
                onClick={onSubmit}
                loading={loading}
                loadingPosition="center"
                variant="contained"
              >
                <span>Login</span>
              </LoadingButton>
            </section>
            <div className="mt-5 mb-3 text-center text-sm text-gray-400">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-blue-400 no-underline hover:underline"
              >
                Sign Up
              </Link>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Login;
