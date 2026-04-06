import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Login from "./auth/Login";
import ForgotPassword from "./auth/ForgotPassword";
import ConfirmPassword from "./auth/ConfirmPassword";
import NewPassword from "./auth/NewPassword";
import Insights from "./pages/Insights";
import Navbar from "./components/Navbar";

import "./App.css";
import Map from "./pages/Map";
import { Typography } from "@mui/material";

function Layout() {
  const location = useLocation();

  // routes where navbar should be hidden
  const hideNavbarRoutes = [
    "/",
    "/forget-password",
    "/confirm-password",
    "/new-password",
  ];

  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {/* Navbar */}
      {!shouldHideNavbar && <Navbar />}

      <Routes>
        {/* AUTH */}
        <Route path="/" element={<Login />} />
        <Route path="/forget-password" element={<ForgotPassword />} />
        <Route path="/confirm-password" element={<ConfirmPassword />} />
        <Route path="/new-password" element={<NewPassword />} />

        {/* DASHBOARD */}
        <Route path="/map" element={<Map />} />
        <Route path="/insights" element={<Insights />} />
      </Routes>

      {!shouldHideNavbar && <Typography
        component="a"
        href="https://www.blue-bird.ai/"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          display: "block",
          textAlign: "center",
          fontSize: "11px",
          mb: 2,
          fontFamily: "montserrat-regular",
          color: "#587A9C",
          textDecoration: "none",
          cursor: "pointer",
        }}
      >
        ©Copyright 2026, Bluebird AI Inc.
      </Typography>}

    </>
  );
}

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}