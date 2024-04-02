import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Register from "../Pages/Register/Register";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children : [
        {
          index : true,
          element : <Home/>
        },
        {
          path : 'about',
          element : <About/>
        },
        {
          path : 'register',
          element : <Register/>
        }
      ]
    },
  ]);