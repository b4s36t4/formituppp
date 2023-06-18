import { PrivateRoutes } from "./navigation/PrivateRoutes";
import { useAuthProvider } from "./Provider/Auth/hook";
import { Loader2Icon } from "lucide-react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";

import "./App.css";
import "reactflow/dist/style.css";

function App() {
  const { isLoggedIn } = useAuthProvider();

  if (isLoggedIn === null) {
    return (
      <div className="flex items-center justify-center h-screen flex-col">
        <Loader2Icon size={30} className="animate-spin" />
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<PrivateRoutes />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
