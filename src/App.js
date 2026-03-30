import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./auth/Login";
import ForgotPassword from './auth/ForgotPassword'
import ConfirmPassword from './auth/ConfirmPassword'
import NewPassword from './auth/NewPassword'

import './App.css'

export default function App() {
  return (
    <Router>
      <Routes>
        {/* DEFAULT LOGIN */}
        <Route path="/" element={<Login />} />
        <Route path="/forget-password" element={<ForgotPassword />} />
        <Route path="/confirm-password" element={<ConfirmPassword />} />
        <Route path="/new-password" element={<NewPassword />} />


        {/* DASHBOARD */}
        <Route path="/map" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}