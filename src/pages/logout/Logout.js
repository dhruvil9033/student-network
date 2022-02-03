import { useEffect } from "react";
import { useHistory } from "react-router";

export default function Logout() {
  useEffect(() => {
    localStorage.clear();
    // window.location.href = "/";
  });
  return <></>;
}
