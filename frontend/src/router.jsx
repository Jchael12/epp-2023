import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Programs from "./components/Programs";
import News from "./components/News";
import App from "./App";

import DashboardLayout from "./admin/DashboardLayout";
import UploadData from "./admin/UploadData";
import ManageData from "./admin/ManageData";
import EditData from "./admin/EditData";
import Signup from "./admin/Signup";
import Login from "./admin/Login";
import PrivateRoute from "./private/PrivateRoute";
import Logout from "./admin/Logout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/programs",
        element: <Programs />,
      },
      {
        path: "/news",
        element: <News />,
      },
    ],
  },
  {
    path: "/admin/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/admin/dashboard",
        element: <PrivateRoute />,
      },
      {
        path: "/admin/dashboard/upload",
        element: <UploadData />,
      },
      {
        path: "/admin/dashboard/manage",
        element: <ManageData />,
      },
      {
        path: "/admin/dashboard/edit-data/:id",
        element: <EditData />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/item/${params.id}`),
      },
    ],
  },
  {
    path: "sign-up",
    element: <Signup />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "logout",
    element: <Logout />,
  },
]);

export default router;
