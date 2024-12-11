import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layouts/MainLayOut";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
  },
]);
export default router;