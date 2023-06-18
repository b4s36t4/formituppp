import { User } from "firebase/auth";
import React from "react";

export interface AuthContext {
  isLoggedIn?: boolean | null;
  login: (user: SessionUser) => Promise<User | undefined>;
  signup: (user: SessionUser) => Promise<User | undefined>;
  verified: boolean | null;
  resendVerifyEmail: () => Promise<void>;
}

export const context = React.createContext<null | AuthContext>(null);
