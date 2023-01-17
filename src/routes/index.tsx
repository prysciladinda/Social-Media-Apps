import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Index from "../pages";
import Beranda from "../pages/auth/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/Login",
    element: <Beranda />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
