import Dashboard from "../pages/Dashboard/Dashboard";

import CreateClient from "../pages/Dashboard/CreateClient";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateProvider from "../pages/Dashboard/CreateProvider";
import Login from "../pages/Login/Login";
import RegisterClient from "../pages/Client/RegisterClient";
import GetClient from "../pages/Client/GetClient";
import GetProvider from "../pages/Provider/GetProvider";
import GetService from "../pages/Service/GetService";
import GetSuscription from "../pages/Suscription/GetSuscription";
import Welcome from "../pages/Dashboard/componenets/Welcome";
import CreateSuscription from "../pages/Suscription/CreateSuscription";
import CreateService from "../pages/Service/CreateService";

export default function RouterRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<RegisterClient />} />
        <Route path="/dashboard" element={<Dashboard />} >
          <Route path="" element={<Welcome />} />
          <Route path="administration" element={<Welcome />} />

          <Route path="providers">
            <Route path="" element={<GetProvider />} />
            <Route path="create" element={<CreateProvider />} />
          </Route>

          <Route path="clients">
            <Route path="" element={<GetClient />} />
            <Route path="create" element={<CreateClient />} />
          </Route>

          <Route path="services">
            <Route path="" element={<GetService />} />
            <Route path="create" element={<CreateService />} />
          </Route>

          <Route path="suscriptions">
            <Route path="" element={<GetSuscription />} />
            <Route path="create" element={<CreateSuscription />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
