import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Hw1 from "../hw1/home";
import Hw2 from "../hw2/home";
import UserDetail from "../hw1/userDetail";
import Login from "../hw1/login";
import ProtectedRoute from "./protectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>404</div>,
  },
  {
    path: "/hw1",
    element: <ProtectedRoute><Hw1 /></ProtectedRoute>,
    errorElement: <div>404</div>,
  },
  {
    path: "/hw1/:username",
    element: <ProtectedRoute><UserDetail /></ProtectedRoute>,
    errorElement: <div>404</div>,
  },
  {
    path: "/hw1/login",
    element: <Login />,
    errorElement: <div>404</div>,
  },
  {
    path: "/hw2",
    element: <Hw2 />,
    errorElement: <div>404</div>,
  },
  {
    path: "/hw2/:id",
    element: <Hw2 />,
    errorElement: <div>404</div>,
  },
]);

export default router;