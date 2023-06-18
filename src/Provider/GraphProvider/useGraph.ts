import { useContext } from "react";
import { context } from "./context";

export const useGraph = () => {
  const _context = useContext(context);
  if (!_context) {
    throw new Error("No Graph Context Found!");
  }
  return _context;
};
