import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "../pages";
import Beranda from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/Beranda",
    element: <Beranda />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
