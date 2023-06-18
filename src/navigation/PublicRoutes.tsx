import { Route, Routes, useNavigate } from "react-router-dom";
import { SignUp } from "../pages/SignUp";
import { Login } from "@/pages/Login";
import { useAuthProvider } from "@/Provider/Auth/hook";

export const PublicRoutes = () => {
  const { isLoggedIn } = useAuthProvider();
  const navigate = useNavigate();

  if (isLoggedIn) {
    navigate("/");
    return;
  }

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};
