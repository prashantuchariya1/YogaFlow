import React from "react";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import UserProfile from "./pages/UserProfile/UserProfile";
import { createBrowserRouter } from "react-router-dom";

const appRouter = createBrowserRouter([

  {
    path: "/",
    element: <Home/>
  },
  {
    path:"/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <SignUp/>
  },
  {
    path: "/profile",
    element: <UserProfile/>,
    errorElement:<Home/>
  }
])


export default appRouter;