import React, { useMemo, useState } from "react";
import {
  User,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { toast } from "react-hot-toast";
import { context } from "./context";
import { getFirebaseError } from "@/lib/utils";
import { auth } from "@/firebase/client";

interface ProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: ProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  auth.onAuthStateChanged((_user) => {
    if (_user === null) {
      setIsLoggedIn(false);
      return;
    }
    setUser(_user);
    setIsLoggedIn(true);
  });

  const isEmailVerified = useMemo(() => {
    if (!user) return null;
    return user.emailVerified;
  }, [user]);

  const login = async (data: SessionUser) => {
    try {
      const res = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      return res.user;
    } catch (error) {
      const errorMessage = getFirebaseError(error);
      toast.error(errorMessage);
    }
  };

  const signup = async (data: SessionUser) => {
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      return res.user;
    } catch (error) {
      const errorMessage = getFirebaseError(error);
      toast.error(errorMessage);
    }
  };

  const resendVerifyEmail = async () => {
    if (!auth.currentUser) return;
    await sendEmailVerification(auth.currentUser, {
      url: "http://localhost:3001",
    });
    toast.success("Confirmation mail sent!");
  };

  const value = {
    isLoggedIn,
    login,
    signup,
    verified: isEmailVerified,
    resendVerifyEmail,
  };
  return <context.Provider value={value}>{children}</context.Provider>;
};
