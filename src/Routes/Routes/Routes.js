import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import AddDoctor from "../../Pages/Dashboard/AddDoctor/AddDoctor";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import ManageDoctors from "../../Pages/Dashboard/ManageDoctors/ManageDoctors";
import MyAppointment from "../../Pages/Dashboard/MyAppointment/MyAppointment";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import Signup from "../../Pages/Signup/Signup";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement:<DisplayError/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/appointment",
        element: <Appointment />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><DashboardLayout/></PrivateRoute> ,
    errorElement:<DisplayError/>,
    children:[
      {
        path:'/dashboard',
        element:<MyAppointment/>
      },
      {
        path:'/dashboard/allusers',
        element:<AdminRoute><AllUsers/></AdminRoute>
      },
      {
        path:'/dashboard/add-doctor',
        element:<AdminRoute><AddDoctor/></AdminRoute>
      },
      {
        path:'/dashboard/managedoctors',
        element:<AdminRoute><ManageDoctors/></AdminRoute>
      },
      {
        path:'/dashboard/payment/:id',
        element:<AdminRoute><Payment/></AdminRoute>,
        loader:({params})=>fetch(`http://localhost:5000/bookings/${params.id}`)
      },
    ]
  },
]);

export default router;
