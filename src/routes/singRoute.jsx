import Login from "../pages/Login/Login";
import RegisterClient from "../pages/Client/RegisterClient";
import { Route } from "react-router-dom";

export default function SignRoutes() {
  return (
    <>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<RegisterClient />} />
    </>
  );
}
