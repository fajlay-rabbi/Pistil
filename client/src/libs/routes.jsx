import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignIn from "../pages/client/SignIn";
import Otp from "../pages/client/Otp";
import Signup from "../pages/client/Signup";
import Dashboard from "../pages/client/Dashboard";
import MySessions from "../pages/client/MySessions";
import Profile from "../pages/client/Profile";
import MedicalHistory from "../pages/client/MedicalHistory";
import BuyPackage from "../pages/client/BuyPackage";
import DoctorProfile from '../pages/doctor/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <SignIn />,
  },
  {
    path: "/register",
    element: <Signup />,
  },
  {
    path: "/otp",
    element: <Otp />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <MySessions />,
      },
      {
        path: "find-doctor",
        element: <div>Find a doctor</div>,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "doctor-profile",
        element: <DoctorProfile />,
      },
      {
        path: "intake-form",
        element: <div>Intake form</div>,
      },
      {
        path: "medical-history",
        element: <MedicalHistory />,
      },
      {
        path: "medical-plan",
        element: <div>Medical Plan</div>,
      },
      {
        path: "buy-package",
        element: <BuyPackage />,
      },
      {
        path: "session-receipt",
        element: <div>Sessions Receipt</div>,
      },
      {
        path: "payment-receipt",
        element: <div>Payment Receipt</div>,
      },
      {
        path: "request-support",
        element: <div>Request for support</div>,
      },
      {
        path: "preparing-session",
        element: <div>Preparing for your session</div>,
      },
    ],
  },
]);

export default router;
