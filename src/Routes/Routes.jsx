import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import DashboardLayout from "../Layout/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import MySelectedClass from "../Pages/Dashboard/MySelectedClass/MySelectedClass";
import EnrolledClass from "../Pages/Dashboard/EnrolledClass/EnrolledClass";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddClass from "../Pages/Dashboard/AddClass/AddClass";
import AdminRoute from "./AdminRoute";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/instructors',
        element: <Instructors/>
      },
      {
        path: '/classes',
        element: <Classes/>
      }
    ]
  },
  
      // Dashboard Route set up 
  {
    path: 'dashboard',
    element: <PrivateRoute><DashboardLayout/></PrivateRoute>,
    children: [
      {
        path: 'selected-class',
        element: <MySelectedClass/>
      },
      {
        path: 'enrolled-class',
        element: <EnrolledClass/>
      },
      {
        path: 'all-users',
        element: <AdminRoute><AllUsers/></AdminRoute>
      },
      {
        path: 'add-class',
        element: <AdminRoute><AddClass/></AdminRoute>
      }
    ]
  },


  {
    path: '/LogIn',
    element: <Login/>
  },
  {
    path: '/signUp',
    element: <SignUp/>
  }
]);