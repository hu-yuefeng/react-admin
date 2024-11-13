import Login from "@/pages/Login";
import Layout from "@/pages/Layout";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/laout",
    element: <Layout />,
  },
]);

export default router;
