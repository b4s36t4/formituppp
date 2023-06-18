import { useAuthProvider } from "@/Provider/Auth/hook";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useRedirectAuth = (isPrivate = false) => {
  const { isLoggedIn } = useAuthProvider();
  const navigate = useNavigate();

  useEffect(() => {
    if (isPrivate && !isLoggedIn) {
      navigate("/login");
      return;
    }
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, isPrivate, navigate]);
};
