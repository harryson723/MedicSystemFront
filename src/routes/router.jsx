import Dashboard from "../pages/Dashboard/Dashboard";

import CreateClient from "../pages/Dashboard/CreateClient";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateProvider from "../pages/Dashboard/CreateProvider";
import CreateService from "../pages/Dashboard/componenets/CreateService";
import CreateSuscription from "../pages/Dashboard/componenets/CreateSuscription";
import SignRoutes from "./singRoute";
import Login from "../pages/Login/Login";
import RegisterClient from "../pages/Client/RegisterClient";

export default function RouterRoutes() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<RegisterClient />} />
        <Route path="/dashboard">
          <Route path="" element={<Dashboard />} />
          <Route path="administration" element={<Dashboard />} />
          <Route path="providers" element={<Dashboard />} />
          <Route path="clients" element={<Dashboard />} />
          <Route
            path="createClient"
            element={<Dashboard children={<CreateClient />} />}
          />
          <Route
            path="createProvider"
            element={<Dashboard children={<CreateProvider />} />}
          />
          <Route
            path="createService"
            element={<Dashboard children={<CreateService />} />}
          />
          <Route
            path="createService"
            element={<Dashboard children={<CreateService />} />}
          />
          <Route
            path="createSuscription"
            element={<Dashboard children={<CreateSuscription />} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
