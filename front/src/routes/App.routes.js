import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../home/pages/Login";
import RegistroEsitosoPage from "../home/pages/RegistroExitosoPage";
import RegistroPage from "../home/pages/RegistroPage";
import AdminRoutes from "./admin.routes";
import ClientRoutes from "./client/client.routes";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<ClientRoutes />} />
        <Route path="/admin/*" element={<AdminRoutes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegistroPage />} />
        <Route path="/register/success" element={<RegistroEsitosoPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
