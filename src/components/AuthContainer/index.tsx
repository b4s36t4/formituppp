import { ReactNode } from "react";

import styles from "./styles.module.css";

export const AuthContainer = ({ children }: { children: ReactNode }) => {
  
  return <div className={styles.container}>{children}</div>;
};
