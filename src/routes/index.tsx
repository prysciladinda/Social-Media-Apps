import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import Aboutme from "../pages/aboutme";
import Register from "../pages/auth/Register";
import Detail from "../pages/detail";
import Profil from "../pages/profil";
import Beranda from "../pages";
import Login from "../pages/auth/Login";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Beranda />,
  },
  {
    path: "/detail",
    element: <Detail />,
  },
  {
    path: "/aboutme",
    element: <Aboutme />,
  },
  {
    path: "/profil",
    element: <Profil />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
