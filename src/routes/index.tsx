import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Beranda from "../pages";
import Detail from "../pages/detail";
import Aboutme from "../pages/aboutme";

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
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
