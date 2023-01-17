import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "../pages";
import Beranda from "../pages";
import Login from "../pages/auth/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/Beranda",
    element: <Beranda />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
