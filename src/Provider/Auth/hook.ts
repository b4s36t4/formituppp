import { useContext } from "react";
import { context } from "./context";

export const useAuthProvider = () => {
  const _context = useContext(context);
  if (!_context) {
    throw Error("Not Provider found!");
  }

  return _context;
};
