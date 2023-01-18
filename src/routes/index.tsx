import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
// import { useState, useEffect } from "react";
import axios, { AxiosHeaders } from "axios";
import { useCookies } from "react-cookie";

import Aboutme from "../pages/aboutme";
import Register from "../pages/auth/Register";
import Detail from "../pages/detail";
import Profil from "../pages/profil";
import Beranda from "../pages";
import Login from "../pages/auth/Login";


axios.defaults.baseURL =
  "https://vitserver.swaggerhub.com/griffinhenry07/socialmedia/1.0.0/";

function App() {
  const [cookie, , removeCookie] = useCookies(["token"]);
  const checkToken = cookie.token;

  axios.interceptors.request.use(function (config: any) {
    config.headers = config.headers ?? {};
    config.headers.Authorization = `Bearer ${checkToken}`;
    return config;
  });

  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      const { data } = error.response;
      if (
        data === "Missing or malformed JWT" ||
        [401, 403].includes(data.code)
      ) {
        removeCookie("token");
      }
      return Promise.reject(error);
    }
  );

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Beranda />,
    },
    {
      path: "/detail/:post_id",
      element: <Detail />,
    },
    {
      path: "/aboutme",
      element: checkToken ? <Navigate to="/" /> : <Aboutme />,
    },
    {
      path: "/profil",
      element: checkToken ? <Profil /> : <Navigate to="/login" />,
    },
    {
      path: "/login",
      element: checkToken ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/users",
      element: checkToken ? <Navigate to="/" /> : <Register />,
    },
    {
      path: "*",
      element: <Login />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
