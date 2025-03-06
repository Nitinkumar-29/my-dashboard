import { useEffect } from "react";
import { Login } from "./authentication/Login";
import { ProtectedRoutes } from "./layout/ProtectedRoutes";

function App() {
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token && window.location.pathname !== "/login") {
      window.location.replace("/login");
    }
  }, [token]);
  return <>{token !== null ? <ProtectedRoutes /> : <Login />}</>;
}

export default App;
