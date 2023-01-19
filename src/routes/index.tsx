import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import axios, { AxiosHeaders } from "axios";
import { useCookies } from "react-cookie";

import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import Aboutme from "../pages/aboutme";
import Detail from "../pages/detail";
import Profil from "../pages/profil";
import Beranda from "../pages";

import { ThemeContext } from "../utils/context";

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
      element: checkToken ? <Navigate to="/profil" /> : <Login />,
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

  // const App = () => {
  const [theme, setTheme] = useState("light");
  const background = useMemo(() => ({ theme, setTheme }), [theme]);

  useEffect(() => {
    console.log(theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={background}>
      <RouterProvider router={router} />;
    </ThemeContext.Provider>
  );
}

export default App;
