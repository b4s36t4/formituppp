import { ClassValue, clsx } from "clsx";
import { BsInputCursorText } from "react-icons/bs";
import { RxRadiobutton } from "react-icons/rx";
import { FirebaseError } from "firebase/app";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getFirebaseError(error: unknown) {
  if (error instanceof FirebaseError) {
    switch (error.code) {
      case "auth/email-already-exists":
        return "Email already exists, please login";
      case "auth/user-not-found":
        return "No Account found, please check again";
      case "auth/wrong-password":
        return "Invalid password, please check.";
      default:
        console.log(error.code);
        return "Unknown error";
    }
  }
  return "Unknown error";
}

export const getIcon = (icon: string) => {
  switch (icon) {
    case "input": {
      return <BsInputCursorText size={25} />;
    }
    case "radio":
      return <RxRadiobutton size={25} />;
  }
};
