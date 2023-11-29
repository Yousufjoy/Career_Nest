import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import { Home } from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Register from "../Pages/Register/Register";
import LoginPage from "../Pages/LoginPage/LoginPage";
import AddJobs from "../Pages/AddJobs/AddJobs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/addjobs",
        element: <AddJobs></AddJobs>,
      },
    ],
  },
]);
export default router;
