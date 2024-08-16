import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import "./dashboard.scss";
import Navbar from "../../components/client/UI/nav/Navbar";
import { clientRoutes, doctorRoutes } from "../../libs/clientRoutes";
import DashboardMenuItem from "../../components/client/UI/Card/DashboardMenuItem";
import SessionCard from "../../components/doctor/SessionCard";

const Dashboard = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const userType = "doctor";

  const profileTypeWiseRoutes =
    userType === "doctor" ? doctorRoutes : clientRoutes;

  useEffect(() => {
    if (userType === "client") {
      const activeRoute = clientRoutes.find((route) => {
        const path = location.pathname.split("/").pop();
        if (path === route.path) {
          return route;
        }
      });
      if (activeRoute) {
        setActiveItem(activeRoute.name);
      }
    }
    if (userType === "doctor") {
      const activeRoute = doctorRoutes.find((route) => {
        const path = location.pathname.split("/").pop();
        if (path === route.path) {
          return route;
        }
      });
      if (activeRoute) {
        setActiveItem(activeRoute.name);
      }
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleMediaQueryChange = (e) => {
      if (e.matches) {
        setIsCollapsed(true);
      } else {
        setIsCollapsed(false);
      }
    };
    const mediaQuery = window.matchMedia("(max-width: 1120px)");
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const handleHamburgerClick = () => {
    setIsCollapsed(!isCollapsed);
  };

  const sharedData = { user: userType };

  return (
    <>
      <div className="fixed">
        <Navbar handleHamburgerClick={handleHamburgerClick} />
      </div>
      <div className="dashboard-wrapper">
        <div className="sidebar-wrapper">
          <div className="mt-40">
            <>
              {profileTypeWiseRoutes?.map((item, index) => (
                <DashboardMenuItem
                  item={item}
                  key={index}
                  activeItem={activeItem}
                  setActiveItem={setActiveItem}
                  isCollapsed={isCollapsed}
                />
              ))}
            </>
          </div>
        </div>

        <div className="dashboard">
          <div className="dashboard-content-wrapper container">
            <div className="dashboard-content">
              {location.pathname === "/dashboard/medical-history" && (
                <div className="mb-30 dash-txt">
                  <h1 className="txt-green">Medical History</h1>
                  <p className="mt-10 txt-color">
                    Tell us more about your medical history. This will help your
                    doctor be prepared and effective during your sessions with
                    them.
                  </p>
                </div>
              )}
              <Outlet context={sharedData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
